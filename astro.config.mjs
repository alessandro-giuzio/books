import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import vue from '@astrojs/vue';
import path from 'path';
import { fileURLToPath } from 'url';
import vtbot from 'astro-vtbot';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://irakurleak.eus',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./@', import.meta.url)),
        '@components': fileURLToPath(
          new URL('./src/components', import.meta.url),
        ),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
  },
  integrations: [alpinejs(), vue(), vtbot(), sitemap()],
});
