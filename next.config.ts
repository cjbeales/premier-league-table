import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./app/scss"],
  },
};

export default nextConfig;
