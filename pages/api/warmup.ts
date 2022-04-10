import { NextApiRequest, NextApiResponse } from "next";
import { warmUp } from "lib/warmup";

async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await warmUp();
  } catch (err) {
    res.status(500);
    res.json({ err: (err as Error).message });
  } finally {
    res.end();
  }
}
export default handler;
