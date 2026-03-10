import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/TheForGivenOne' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
