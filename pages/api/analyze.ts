import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { env } from "@chronark/env";
const validation = z.object({ text: z.string().nonempty() });

export type Res = {
	isClimateRelated?: boolean,
	err?: string,
	inferences?: { model: string, inference: { label: string, score: number }[] }[],
};
const headers = {
	Authorization: `Bearer ${env.require("HUGGINGFACE_API_KEY")}`,
};

type InferenceResponse =
	| { label: string, score: number }[][]
	| { error: string, estimated_time?: number };

async function getInference(model: string, text: string): Promise<
	InferenceResponse
> {
	const res = await fetch(
		`https://api-inference.huggingface.co/models/climatebert/${model}`,
		{ method: "POST", headers, body: JSON.stringify({ inputs: text }) },
	);
	if (!res.ok) {
		throw new Error(`Unable to call huggingface api: ${await res.text()}`);
	}
	return (await res.json()) as InferenceResponse;
}

async function warmUp(): Promise<void> {
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
		}),
	);
}

async function handler(req: NextApiRequest, res: NextApiResponse<Res>): Promise<
	void
> {
	try {
		const { text } = validation.parse(req.body);

		await warmUp();
		const isClimateRelatedPromise = getInference(
			"distilroberta-base-climate-detector",
			text,
		);

		const isClimateRelated = (
			(await isClimateRelatedPromise)[0]?.find((x) => x.label === "yes")?.score ?? 0
		) > 0.5;

		if (!isClimateRelated) {
			return res.json({ isClimateRelated });
		}
		const promises = {
			detector: isClimateRelatedPromise,
			sentiment: getInference("distilroberta-base-climate-sentiment", text),
			commitment: getInference("distilroberta-base-climate-commitment", text),
			specificity: getInference("distilroberta-base-climate-specificity", text),
			tcfd: getInference("distilroberta-base-climate-tcfd", text),
		};

		const inferences = await Promise.all(
			Object
				.entries(promises)
				.map(
					async ([model, promise]) => {
						return { model, inference: (await promise)[0]! };
					},
				),
		);
		res.json({ inferences, isClimateRelated });
	} catch (err) {
		res.status(500);
		res.json({ err: (err as Error).message });
	} finally {
		res.end();
	}
}
export default handler;
