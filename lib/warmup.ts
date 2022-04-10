import { getInference } from "./inference";

export async function warmUp(): Promise<void> {
  const models = [
    "distilroberta-base-climate-detector",
    "distilroberta-base-climate-sentiment",
    "distilroberta-base-climate-commitment",
    "distilroberta-base-climate-specificity",
    "distilroberta-base-climate-tcfd",
  ];

  await Promise.all(
    models.map(async (model) => {
      for (let i = 0; i <= 30; i++) {
        const r = await getInference(model, ".");
        if (!("error" in r)) {
          return;
        }
        await new Promise((res) => setTimeout(res, 1000));
      }
      throw new Error("Unable to warm up models in time");
    })
  );
}
