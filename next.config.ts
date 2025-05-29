import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverComponentsExternalPackages: ['@tailwindcss/postcss'],
  },
};

export default nextConfig;
