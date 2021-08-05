import { NextApiRequest, NextApiResponse } from "next"
import { createJWT } from "lib/jwt"
import { Key, Cache } from "lib/redis"
import { Logger } from "tslog"

type Scope = "authorized" | "anonymous"
const limits: { [scope in Scope]: { tokens: number; window: number } } = {
  authorized: {
    tokens: 5,
    window: 10,
  },
  anonymous: {
    tokens: 5,
    window: 24 * 60 * 60,
  },
}
type Bucket = {
  /**
   * How many uses are left
   */
  tokens: number
  /**
   * Unix timestamp when the bucket expires in seconds
   */
  expiresAt: number
}
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const redisConnection = process.env.REDIS_CONNECTION
  if (!redisConnection) {
    res.status(500)
    return res.end("REDIS_CONNECTION not found")
  }
  const rateLimiter = new Cache(redisConnection)
  const accessToken = req.headers.authorization

  let ratelimitKey: Key
  let scope: Scope
  if (accessToken) {
    const isValid = await rateLimiter.get(new Key({ accessToken }))
    if (!isValid) {
      res.status(401)
      return res.end("Invalid access token")
    }
    scope = "authorized"
    ratelimitKey = new Key({ scope, accessToken })
  } else {
    const ip = req.socket.remoteAddress

    if (!ip) {
      res.status(400)
      return res.end("Unable to determine your ip")
    }

    scope = "anonymous"
    ratelimitKey = new Key({ scope, ip })
  }
  let bucket = await rateLimiter.get<Bucket>(ratelimitKey)
  if (!bucket) {
    const expiresAt = Math.floor(Date.now() / 1000) + limits[scope].window
    bucket = {
      tokens: limits[scope].tokens,
      expiresAt,
    }
    await rateLimiter.set(ratelimitKey, expiresAt, bucket)
  }
  res.setHeader("x-ratelimit-limit", limits[scope].tokens)
  res.setHeader("x-ratelimit-remaining", bucket.tokens - 1)
  res.setHeader("x-ratelimit-reset", bucket.expiresAt ?? 0)

  if (bucket.tokens <= 0) {
    res.status(429)
    return res.end("Ratelimit exceeded")
  }
  const { paragraph } = req.body

  if (!paragraph) {
    res.status(400)
    return res.end("No paragraph found")
  }

  const jwt = createJWT()

  const classifierEndpoint = process.env.CLASSIFIER_ENDPOINT
  if (!classifierEndpoint) {
    throw new Error(`CLASSIFIER_ENDPOINT is not defined`)
  }

  new Logger().info(`pretend to call ${classifierEndpoint} and add token "Bearer ${jwt}"`)

  const classification = { dummy: 0.12, data: 0.41 }
  /**
   * Only set this now in case something went wrong. We only want to record the request if it was
   * successful
   */
  await rateLimiter.set(ratelimitKey, bucket.expiresAt, { ...bucket, tokens: bucket.tokens - 1 })

  res.json(classification)
  return res.end()
}
