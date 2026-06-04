// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ytalyze.xyz',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'pt-br'],
		routing: { prefixDefaultLocale: false }, // en stays at /, pt-br at /pt-br/
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'en',
				// route segment → hreflang value (BCP-47 casing)
				locales: { en: 'en', 'pt-br': 'pt-BR' },
			},
		}),
	],
});
