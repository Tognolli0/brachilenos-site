import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pt-br",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
