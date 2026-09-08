import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://assets-in.bmscdn.com/**")],
  },
  allowedDevOrigins: [
    "localhost",
    "*.local-origin.dev",
    "192.135.94.29",
    "192.168.0.105",
  ],
};

export default nextConfig;
