import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import vue from "@astrojs/vue";
import path from 'path';
import vtbot from 'astro-vtbot';




import sitemap from '@astrojs/sitemap';




// https://astro.build/config
export default defineConfig({
  site: 'https://irakurleak.eus',
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@styles': path.resolve('./src/styles'),
        '@assets': path.resolve('./src/assets'),
      },
    },
  },
  integrations:
  [
    tailwind({applyBaseStyles: false,}),
      alpinejs(),
       vue(),
        vtbot(),
         sitemap()],

});