import { v4 as uuid } from "uuid"
import { Key, Cache } from "../lib/redis"

const redisConnection = process.env.REDIS_CONNECTION
if (!redisConnection) {
  throw new Error("REDIS_CONNECTION is undefined")
}

const cache = new Cache(redisConnection)
const accessToken = uuid()
const key = new Key({ accessToken })

const expriresAt = Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60

cache.set(key, expriresAt, { valid: true })
// eslint-disable-next-line no-console
console.log({ accessToken })
