import {Pathnames, LocalePrefix} from 'next-intl/routing';


export const defaultLocale = 'kz' as const;
export const locales = ['kz', 'ru', 'en'] as const;
export const localePrefix: LocalePrefix<typeof locales> = 'always';
export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
};