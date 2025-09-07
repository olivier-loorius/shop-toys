import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr'],
  defaultLocale: 'fr'
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};
