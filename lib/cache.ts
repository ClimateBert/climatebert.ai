/* eslint-disable max-classes-per-file */
import { Redis } from "@upstash/redis";
import { createHash } from "crypto";

export class Key {
  public readonly parameters?: Record<string, unknown>;

  constructor(parameters: Record<string, unknown>) {
    this.parameters = parameters;
  }

  public toString(): string {
    return createHash("md5")
      .update(JSON.stringify(this.parameters))
      .digest("hex");
  }
}

type Value = Record<string, unknown> | unknown[] | null | string;

export class Cache {
  private client: Redis;
  constructor(client: Redis) {
    this.client = client;
  }

  public async set(key: Key, expiresAt: number, value: Value): Promise<void> {
    await this.client.set(key.toString(), value, {
      ex: Math.floor(expiresAt - Date.now() / 1000),
    });
  }

  public async get<T extends Value>(key: Key): Promise<T | null> {
    return await this.client.get<T>(key.toString()).catch((err) => {
      console.error(err);
      return null;
    });
  }
}
