import { createHash } from "crypto";
import { Redis } from "@upstash/redis";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
async function main() {
	const [, , key] = process.argv;
	if (!key) {
		throw new Error(`Usage: ${process.argv[1]} <key>`);
	}
	const hashedAccessToken = createHash("sha256").update(key).digest("hex");
	const redis = Redis.fromEnv();
	await redis.set(`accessToken:${hashedAccessToken}`, true);
}

main();
