import { createClient } from "@supabase/supabase-js"
import { env } from "@chronark/env"
import { resolver } from "blitz"
import { z } from "zod"

const signup = z.object({
  email: z.string().email(),
})

export default resolver.pipe(resolver.zod(signup), async ({ email }) => {
  const supabase = await createClient(env.require("SUPABASE_URL"), env.require("SUPABASE_KEY"))

  const { data, error } = await supabase.from("newsletter").insert([{ email }])
  if (error && !error.message.includes("newsletter_pkey")) {
    throw new Error(error.message)
  }

  const { data: emails, error: readError } = await supabase.from("newsletter").select("email")
  if (readError) {
    throw new Error(readError.message)
  }

  return { rank: emails?.length ?? 0 }
})
