/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/game/:id',
            destination: '/gamePage', // The page where the game will be displayed
          },
        ];
      },
};

export default nextConfig;
