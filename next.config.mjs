/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Any other settings

  // Adding experimental features or custom settings if required
  experimental: {
    scrollRestoration: true, // Example of an experimental feature
  },

  // Optional: Add custom headers or rewrites
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

  async rewrites() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
      },
    ];
  },
};

export default nextConfig;
