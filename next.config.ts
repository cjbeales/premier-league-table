import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./app/styles"],
  },
};

export default nextConfig;
