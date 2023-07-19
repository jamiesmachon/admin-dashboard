/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DEVELOPMENT_API_URL: 'http://localhost',
    PRODUCTION_API_URL: 'https://api.historyheraldry.com/',
  },
};

module.exports = nextConfig;
