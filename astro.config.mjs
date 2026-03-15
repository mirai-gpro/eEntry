import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eentry.unfix.co.jp',
  base: '/',            // ✅ サブドメインではルート扱い
  output: 'static',
});
