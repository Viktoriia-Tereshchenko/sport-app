import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://api.escuelajs.co/api/v1/files/**"),
      new URL("https://i.imgur.com/**"),
      new URL("https://cdn.pixabay.com/photo/2025/07/12/10/04/**"),
    ],
  },
};

export default nextConfig;
