/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        basque: {
          10: 'oklch(46.35% 0.082 160.17)',
          20: 'oklch(60.01% 0.212 27.56)',
        },
      },
    },
  },

  plugins: [],
};
