/**
 * Locale registry. The route segment is lowercase ('pt-br'); use `hreflang` /
 * `ogLocale` for the BCP-47 / Open Graph spellings in SEO markup.
 */

import { en } from './en';
import { ptBr } from './pt-br';

export const locales = ['en', 'pt-br'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** The dictionary shape — en.ts is the source of truth. */
export type Dict = typeof en;

const dictionaries: Record<Locale, Dict> = {
	en,
	'pt-br': ptBr,
};

export function getDict(locale: Locale): Dict {
	return dictionaries[locale];
}

/** BCP-47 tag per locale, for hreflang and <html lang>. */
export const hreflang: Record<Locale, string> = {
	en: 'en',
	'pt-br': 'pt-BR',
};
