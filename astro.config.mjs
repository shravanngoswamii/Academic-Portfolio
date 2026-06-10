// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { languages, defaultLang } from './src/i18n/ui.ts';

// Build i18n config automatically from src/i18n/ui.ts
// To disable i18n: remove all languages except the default from ui.ts
const locales = Object.keys(languages);
const i18nEnabled = locales.length > 1;
const fallback = Object.fromEntries(
	locales.filter(l => l !== defaultLang).map(l => [l, defaultLang])
);

// https://astro.build/config
export default defineConfig({
	site: 'https://shravangoswami.com',
	base: process.env.BASE_PATH || '/astro-scholar',
	integrations: [
		mdx(),
		sitemap()
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	},
	build: {
		inlineStylesheets: 'always',
	},
	...(i18nEnabled && {
		i18n: {
			locales,
			defaultLocale: defaultLang,
			fallback,
			routing: {
				prefixDefaultLocale: false,
				fallbackType: "rewrite"
			}
		}
	})
});
