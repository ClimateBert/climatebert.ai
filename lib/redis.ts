/* eslint-disable max-classes-per-file */
import Redis from "ioredis"

export class Key {
  public readonly parameters?: Record<string, unknown>

  public readonly environment: string

  constructor(parameters: Record<string, unknown>) {
    this.parameters = parameters
    /**
     * Sometimes during development I fill the cache with "bad" data
     */
    this.environment = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "development"
  }

  public toString(): string {
    return JSON.stringify({
      parameters: this.parameters,
      environment: this.environment,
    })
  }
}

type Value = Record<string, unknown> | unknown[] | null | string

export class Cache {
  private readonly connection: string

  constructor(connection: string) {
    this.connection = connection
  }

  private connect(): Redis.Redis {
    return new Redis(this.connection)
  }

  public async set(key: Key, expiresAt: number, value: Value): Promise<void> {
    const redis = this.connect()
    await redis.set(
      key.toString(),
      JSON.stringify(value),
      "EX",
      Math.floor(expiresAt - Date.now() / 1000),
    )
    await redis.quit()
  }

  public async get<T extends Value>(key: Key): Promise<T | null> {
    const redis = this.connect()

    try {
      const res = await redis.get(key.toString())
      if (!res) {
        return null
      }

      return JSON.parse(res) as T
    } catch (err) {
      return null
    } finally {
      await redis.quit()
    }
  }
}
