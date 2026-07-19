/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/withDefault');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
};

module.exports = withNextIntl(nextConfig);
