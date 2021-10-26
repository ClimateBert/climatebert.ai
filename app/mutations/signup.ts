import { createClient } from "@supabase/supabase-js"
import { env } from "@chronark/env"
import { resolver } from "blitz"
import { z } from "zod"

const signup = z.object({
  email: z.string().email(),
})

export default resolver.pipe(resolver.zod(signup), async ({ email }) => {
  const supabase = createClient(env.require("SUPABASE_URL"), env.require("SUPABASE_KEY"))

  const { error } = await supabase.from("newsletter").insert([{ email }])
  if (error && !error.message.includes("newsletter_pkey")) {
    throw new Error(error.message)
  }
})
