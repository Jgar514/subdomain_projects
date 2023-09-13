// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         accent: {
//           1: "hsl(288 95.8% 90.6%)",
//           2: "hsl(168 83.8% 78.2%)",
//         },
//         bkg: "hsl(210 40% 98%)",
//         content: "hsl(217 32.6% 17.5%)",
//       },
//       animation: {
//         "spin-slower": "spin 35s ease infinite",
//         "spin-slow": "spin 25s ease-in-out infinite reverse",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	darkMode: "class",
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#050816",
				secondary: "#aaa6c3",
				secondaryred: "#D42920",
				secondarytan: "#FBF3D9",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				/*"hero-pattern": "url('/src/assets/herobg.png')", */
			},
		},
	},
	plugins: [],
};
