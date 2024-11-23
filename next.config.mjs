/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  env: {
    DEV_ENV: process.env.DEV_ENV,
  }
};

export default nextConfig;
