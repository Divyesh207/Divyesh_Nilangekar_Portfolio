/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Heavy media in /public is served with max-age=0 by default, so every visit
  // re-downloaded the models and intro clip. File names aren't hashed, so cache
  // for a week (not "immutable") and let the CDN revalidate in the background.
  async headers() {
    const cacheMedia = [
      {
        key: 'Cache-Control',
        value: 'public, max-age=604800, stale-while-revalidate=86400',
      },
    ];
    return [
      { source: '/models/:path*', headers: cacheMedia },
      { source: '/videos/:path*', headers: cacheMedia },
      { source: '/images/:path*', headers: cacheMedia },
    ];
  },
};

export default nextConfig;
