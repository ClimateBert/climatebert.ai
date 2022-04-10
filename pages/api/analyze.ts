import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getInference } from "lib/inference";
import { warmUp } from "lib/warmup";
const validation = z.object({ text: z.string().nonempty() });
import { Redis } from "@upstash/redis";
import { Cache, Key } from "lib/cache";
import { createHash } from "crypto";

type Scope = "authorized" | "anonymous";
const limits: {
  [scope in Scope]: { tokens: number; window: number };
} = {
  authorized: { tokens: 5, window: 10 },
  anonymous: { tokens: 5, window: 24 * 60 * 60 },
};
type Bucket = {
  /**
   * How many uses are left
   */
  tokens: number;
  /**
   * Unix timestamp when the bucket expires in seconds
   */
  expiresAt: number;
};
export type Res = {
  isClimateRelated?: boolean;
  err?: string;
  inferences?: {
    model: string;
    inference: { label: string; score: number }[];
  }[];
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Res>
): Promise<void> {
  try {
    const rateLimiter = new Cache(Redis.fromEnv());
    const accessToken = req.headers["authorization"];

    let ratelimitKey: Key;
    let scope: Scope;
    if (accessToken) {
      const hashedAccessToken = createHash("sha256")
        .update(accessToken)
        .digest("hex");
      const isValid = await rateLimiter.get(`accessToken:${hashedAccessToken}`);
      if (!isValid) {
        res.status(401);
        return res.json({ err: "Invalid access token" });
      }

      scope = "authorized";
      ratelimitKey = new Key({ scope, hashedAccessToken });
    } else {
      scope = "anonymous";
      ratelimitKey = new Key({
        scope,
        ip: req.headers["x-real-ip"],
        userAgent: req.headers["user-agent"],
      });
    }
    let bucket = await rateLimiter.get<Bucket>(ratelimitKey);
    if (!bucket) {
      const expiresAt = Math.floor(Date.now() / 1000) + limits[scope].window;
      bucket = { tokens: limits[scope].tokens, expiresAt };
      await rateLimiter.set(ratelimitKey, expiresAt, bucket);
    }

    res.setHeader("x-ratelimit-limit", limits[scope].tokens.toString());
    res.setHeader("x-ratelimit-remaining", (bucket!.tokens - 1).toString());
    res.setHeader("x-ratelimit-reset", (bucket!.expiresAt ?? 0).toString());

    console.log(bucket.expiresAt);
    if (bucket.tokens <= 0) {
      res.status(429);
      return res.json({
        err: `Too many requests, please try again after ${new Date(
          bucket.expiresAt * 1000
        ).toLocaleString("en-uk")}`,
      });
    }

    const { text } = validation.parse(req.body);

    await warmUp();
    const isClimateRelatedPromise = getInference(
      "distilroberta-base-climate-detector",
      text
    );

    const isClimateRelated =
      ((await isClimateRelatedPromise)[0]?.find((x) => x.label === "yes")
        ?.score ?? 0) > 0.5;

    if (!isClimateRelated) {
      return res.json({ isClimateRelated });
    }
    const promises = {
      detector: isClimateRelatedPromise,
      sentiment: getInference("distilroberta-base-climate-sentiment", text),
      commitment: getInference("distilroberta-base-climate-commitment", text),
      specificity: getInference("distilroberta-base-climate-specificity", text),
      tcfd: getInference("distilroberta-base-climate-tcfd", text),
    };

    const inferences = await Promise.all(
      Object.entries(promises).map(async ([model, promise]) => {
        return { model, inference: (await promise)[0]! };
      })
    );
    /**
     * Only set this now in case something went wrong. We only want to record the request if it was
     * successful
     */
    await rateLimiter.set(ratelimitKey, bucket.expiresAt, {
      ...bucket,
      tokens: bucket.tokens - 1,
    });
    res.json({ inferences, isClimateRelated });
  } catch (err) {
    res.status(500);
    res.json({ err: (err as Error).message });
  } finally {
    res.end();
  }
}
export default handler;
