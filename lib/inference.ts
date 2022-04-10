import { env } from "@chronark/env";

type InferenceResponse =
  | { label: string; score: number }[][]
  | { error: string; estimated_time?: number };

export async function getInference(
  model: string,
  text: string
): Promise<InferenceResponse> {
  const res = await fetch(
    `https://api-inference.huggingface.co/models/climatebert/${model}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.require("HUGGINGFACE_API_KEY")}`,
      },
      body: JSON.stringify({ inputs: text }),
    }
  );
  if (!res.ok) {
    throw new Error(`Unable to call huggingface api: ${await res.text()}`);
  }
  return (await res.json()) as InferenceResponse;
}
