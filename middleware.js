import createIntlMiddleware from 'next-intl/middleware';

export default createIntlMiddleware({
  locales: ['en', 'fr'], // Supported languages
  defaultLocale: 'en',   // Default language
});

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'] // Paths to match
};
