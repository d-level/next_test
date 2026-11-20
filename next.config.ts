import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  crossOrigin: "anonymous",
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/absence-requests",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;