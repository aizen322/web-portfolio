import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for Vercel deployment
  poweredByHeader: false,
};

export default nextConfig;
