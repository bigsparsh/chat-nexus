import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [new URL('https://img.clerk.com/**')],
  },
};

export default nextConfig;
