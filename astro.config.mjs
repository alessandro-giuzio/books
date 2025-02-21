import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import vue from "@astrojs/vue";
import path from 'path';
import vtbot from 'astro-vtbot';




// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@styles': path.resolve('./src/styles'),
        '@assets': path.resolve('./src/assets'),
      },
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false, // Disable Tailwind's base styles
    }),
    alpinejs(),
    vue(),
    vtbot()
  ],
});