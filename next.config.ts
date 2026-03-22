import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return []
  },
  async headers() {
    return [
      {
        source: '/:path((?!api|_next/static|_next/image|favicon\\.ico).*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
