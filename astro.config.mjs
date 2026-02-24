// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://HUZAIFA1610.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});