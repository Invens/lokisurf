/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Combining rewrites into a single configuration
  async rewrites() {
    return [
      {
        source: '/sitemap-games.xml',
        destination: '/api/sitemap-games',
      },
      {
        source: '/sitemap-categories.xml',
        destination: '/api/sitemap-categories',
      },
      {
        source: '/old-page',
        destination: '/new-page',
      },
    ];
  },
  // Adding experimental features or custom settings if required
  experimental: {
    scrollRestoration: true, // Example of an experimental feature
  },

  // Optional: Add custom headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
   // Allowing images from specified domains
   images: {
    domains: ['s.h5games.online', 'www.onlinegames.io', 'cdn.htmlgames.com' ,'cdn.htmlgames.com'], // Add any other domains you need here
  },
};

export default nextConfig;
