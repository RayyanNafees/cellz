import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  output: "server",
  adapter: vercel()
});