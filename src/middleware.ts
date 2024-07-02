import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix, pathnames } from './config';

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix,
    pathnames
});

export const config = {
    matcher: [
        '/',
        '/(kz|ru|en)/:path*',
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
};