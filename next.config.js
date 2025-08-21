/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // ✅ allows deploy even with ESLint errors
    },
  };
  
  module.exports = nextConfig;