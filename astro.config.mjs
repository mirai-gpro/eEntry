import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://eentry.co.jp',
  base: '/',
  output: 'static',
});
