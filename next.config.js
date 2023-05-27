// module.exports = {
//   i18n: {
//     locales: ['en'], // Add your languages here
//     defaultLocale: 'en',
//     localeDetection: false,
//   },
// }

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  output: 'export',
  basePath: '/portfolio-app'
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};
 
module.exports = nextConfig;