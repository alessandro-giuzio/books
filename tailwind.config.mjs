const defaulTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
height:{
	'base':'116rem',
	'base2':'120rem',
},
			colors:{
				midnightMystery: '#13004e',
				royalIndigo: '#48007e',
				electricAmethyst: '#7f00b1',
				whisperingLilac: '#FBF0FF',
				sunsetGold: '#F0A000',
				forestDepths: '#4c6800',
				neonLime: '#c0ff14',
				buttercreamCream: '#f1ffcc',
				softPear: '#f8ffe5',
				tropicalSky:'#05bcff',
				bubblegumBlast:'#ff05bc',
				background: '#1E2237',
				borderGolden: '#F0A000',
				borderSilver: '#C0C0C0',
				borderBronze: '#CD7F32',

			},
			fontFamily: {
        sans: ['Tourney Variable', ...defaulTheme.fontFamily.sans],
				mono: ['"IBM Plex Mono"', ...defaulTheme.fontFamily.mono],
      },
		},
	},
	daisyui: {
		themes: ["light", "dark", "cupcake","bumblebee",
		"emerald",
		"corporate",
		"synthwave",
		"retro",
		"cyberpunk",],
	},
	plugins: [require("daisyui")],
}
