import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'pbs.twimg.com'
    },
    {
      protocol: 'https',
      hostname: 'bio.linkcdn.cc',
    },
    {
      protocol: 'https',
      hostname: 'media4.giphy.com',
    }
  ],
 },
};

export default nextConfig;
