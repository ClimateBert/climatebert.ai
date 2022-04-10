const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports =
	{
		content: ["./**/*.{tsx,html}"],
		darkMode: "class", // or 'media' or 'class'
		theme: {
			colors: {
				...colors,
				transparent: "transparent",
				primary: colors.blue,
				secondary: colors.sky,
			},
			extend: {
				fontFamily: {
					sans: ["Inter var", ...defaultTheme.fontFamily.sans],
					system: defaultTheme.fontFamily.sans,
				},
				animation: { "pulse-slow": "pulse 10s linear infinite" },

				boxShadow: {
					cta: "0 10px 20px -5px rgba(96, 165, 250, 0.4),0 10px 30px -5px rgba(129, 140, 248, 0.3)",
				},
			},
		},
		variants: {
			scale: ["responsive", "hover", "focus", "group-hover"],
			extend: {},
		},
		plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
	};
