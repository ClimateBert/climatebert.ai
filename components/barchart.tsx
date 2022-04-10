import React, { useRef, useEffect } from "react";

import {
	Chart,
	BarController,
	BarElement,
	LinearScale,
	TimeScale,
	Tooltip,
	Legend,
	ChartData,
	CategoryScale,
} from "chart.js";

Chart.register(
	BarController,
	BarElement,
	LinearScale,
	TimeScale,
	Tooltip,
	Legend,
	CategoryScale,
);
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigFile from "tailwind.config.js";

export const tailwindConfig = () => {
	// Tailwind config
	return resolveConfig(tailwindConfigFile);
};
export type BarChartProps = { data: ChartData };
export const BarChart: React.FC<BarChartProps> = ({ data }): JSX.Element => {
	const canvas = useRef(null);

	useEffect(
		() => {
			const ctx = canvas.current;
			if (!ctx) {
				return;
			}
			// eslint-disable-next-line no-unused-vars
			const chart = new Chart(
				ctx,
				{
					type: "bar",
					data: {
						labels: data.labels,
						datasets: data.datasets.map(
							(d) => ({
								backgroundColor: tailwindConfig().theme.colors.primary[500],
								hoverBackgroundColor: tailwindConfig().theme.colors.primary[600],
								// categoryPercentage: 0.66,
								...d,
							}),
						),
					},
					options: {
						responsive: true,

						indexAxis: "y",
						layout: { padding: { top: 12, bottom: 16, left: 20, right: 20 } },
						scales: {
							y: {
								// type: "category",
								grid: { display: false, drawBorder: false },
								ticks: { autoSkip: false },
							},
							x: {
								min: 0,
								max: 1,

								grid: { drawBorder: false },
								ticks: {
									maxTicksLimit: 3,
									align: "end",
									callback: (value) =>
										(typeof value === "string" ? parseFloat(value) : value).toFixed(
											2,
										),
								},
							},
						},
						plugins: {
							legend: { display: false },
							tooltip: {
								callbacks: { label: (ctx) => ctx.parsed.x.toFixed(2) },
							},
						},
						interaction: {
							intersect: false,
							// mode: "nearest",
						},
						animation: { duration: 500 },
						maintainAspectRatio: false,
						resizeDelay: 200,
					},
				},
			);
			return () => chart.destroy();
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[],
	);

	return (
		<React.Fragment>
      <div className="grow">
        <canvas ref={canvas} width="100%" height="100%"></canvas>
      </div>
    </React.Fragment>
	);
};
