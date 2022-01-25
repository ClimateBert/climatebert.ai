import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { env } from "@chronark/env";
import { createClient } from "@supabase/supabase-js";
const signupValidation = z.object({
  email: z.string().email(),
});

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { email } = signupValidation.parse(req.body);

    const supabase = createClient(
      env.require("SUPABASE_URL"),
      env.require("SUPABASE_KEY")
    );

    const { error } = await supabase.from("newsletter").insert([{ email }]);
    if (error && !error.message.includes("newsletter_pkey")) {
      res.status(400);
      res.json({ error: error.message });
      return;
    }
    res.json({ ok: true });
  } catch (err) {
    res.status(500);
    res.json({ err: (err as Error).message });
  } finally {
    res.end();
  }
}
export default handler;
