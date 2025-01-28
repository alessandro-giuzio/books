import animate from "tailwindcss-animate";
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        basque: {
          10:'oklch(46.35% 0.082 160.17)',
          15:'oklch(63.04% 0.1013 183.03)',
          20:'oklch(60.01% 0.212 27.56)',
          25:'oklch(67.83% 0.1559 35.18)',
          30:'oklch(83.42% 0.117 87.43)',
          35:'oklch(78.06% 0.1269 57.86)',
          40:'oklch(98.46% 0.002 247.84)',
          50:'oklch(38.83% 0.041 237.32)',
          60:'oklch(37.53% 0.0438 226.2)'
        },
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
        backgrounds: '#1E2237',
        borderGolden: '#F0A000',
        borderSilver: '#C0C0C0',
        borderBronze: '#CD7F32',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Tourney Variable', ...defaultTheme.fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
        marker:['Permanent Marker',...defaultTheme.fontFamily.sans],
      },
      daisyui: {
        themes: [
          "light", "dark", "cupcake", "bumblebee",
          "emerald", "corporate", "synthwave", "retro", "cyberpunk",
        ],
      },
      height: {
        'base': '116rem',
        'base2': '120rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    animate,
  ],
};
