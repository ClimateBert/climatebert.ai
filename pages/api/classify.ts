import { NextApiRequest, NextApiResponse } from "next"
// import { createJWT } from "lib/jwt"
import { Key, Cache } from "lib/redis"

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
  const cache = new Cache(redisConnection)
  const accessToken = req.headers.authorization

  let key: Key
  let scope: Scope
  if (accessToken) {
    const isValid = await cache.get(new Key({ accessToken }))
    if (!isValid) {
      res.status(401)
      return res.end("Invalid access token")
    }
    scope = "authorized"
    key = new Key({ scope, accessToken })
  } else {
    const ip = req.socket.remoteAddress

    if (!ip) {
      res.status(400)
      return res.end("Unable to determine your ip")
    }

    scope = "anonymous"
    key = new Key({ scope, ip })
  }
  let bucket = await cache.get<Bucket>(key)
  if (!bucket) {
    const expiresAt = Math.floor(Date.now() / 1000) + limits[scope].window
    bucket = {
      tokens: limits[scope].tokens,
      expiresAt,
    }
    await cache.set(key, expiresAt, bucket)
  }
  res.setHeader("x-ratelimit-limit", limits[scope].tokens)
  res.setHeader("x-ratelimit-remaining", bucket.tokens - 1)
  res.setHeader("x-ratelimit-reset", bucket.expiresAt ?? 0)

  if (bucket.tokens <= 0) {
    res.status(429)
    return res.end("Ratelimit exceeded")
  }

  const { content } = req.body

  if (!content) {
    res.status(400)
    return res.end("No content found")
  }

  // const jwt = createJWT()

  const classification = { dummy: 0.12, data: 0.41 }
  await cache.set(key, bucket.expiresAt, { ...bucket, tokens: bucket.tokens - 1 })

  res.json(classification)
  return res.end()
}
