import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/TheForGivenOne',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
