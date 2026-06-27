/** Next.js static export configuration */
module.exports = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  i18n: {
    locales: ['ko', 'en', 'ja', 'zh', 'es', 'fr'],
    defaultLocale: 'ko',
    localeDetection: true,
  },
}
