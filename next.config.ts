import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For static export (Netlify/GitHub Pages)
  // output: 'export',
  // trailingSlash: true,

  // For Docker deployment
  output: "standalone",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
