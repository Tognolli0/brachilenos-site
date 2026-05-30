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
      {
        source: "/:lang/carreiras",
        destination: "/:lang/trabalhe-conosco",
        permanent: true,
      },
      {
        source: "/:lang/servicos",
        destination: "/:lang#solucoes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
