import jwt from "jsonwebtoken"

export function createJWT(): string {
  const secret = process.env.JWT_SIGNING_KEY
  if (!secret) {
    throw new Error("JWT_SIGNING_KEY not found")
  }

  return jwt.sign({}, secret, {
    algorithm: "HS256",
    expiresIn: "60s",
    audience: "climatebert.ai",
    issuer: "climatebert.ai",
  })
}
