import { resolver } from "blitz"
import { z } from "zod"

const signup = z.object({
  email: z.string().email(),
})

export default resolver.pipe(resolver.zod(signup), resolver.authorize(), async (input) => {
  // Do your stuff :)
})
