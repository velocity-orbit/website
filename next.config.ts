import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static hosting
  images: {
    unoptimized: true, // Required because Next.js Image Optimization doesn't work with 'export'
  },
  // basePath is only applied in production so local dev works at localhost:3000
  basePath: isProd ? '/website' : '',
};

export default nextConfig;
