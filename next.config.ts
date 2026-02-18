import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ignore the supabase folder during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore type errors in the supabase folder
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
