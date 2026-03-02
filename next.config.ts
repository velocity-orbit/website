import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static hosting
  images: {
    unoptimized: true, // Required because Next.js Image Optimization doesn't work with 'export'
  },
  basePath: '/website',
};

export default nextConfig;
