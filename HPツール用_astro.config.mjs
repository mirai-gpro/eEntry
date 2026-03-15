import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eentry.co.jp', // 本番サイトのURLはそのまま
  base: '/static/preview-site/', // ★★★ ここを修正 ★★★
  output: 'static',
});