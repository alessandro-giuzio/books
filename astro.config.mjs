import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), db()]
});