import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  output: 'standalone',
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
