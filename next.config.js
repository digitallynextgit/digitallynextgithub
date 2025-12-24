/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        // Custom headers for /services page
        source: '/services',
        headers: [
          {
            key: 'X-Custom-Header',
            value: 'Services Page Header',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        // Default headers for all other pages
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // ✅ Added to fix your error
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com", // ✅ Added to fix client logo images
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com", // ✅ Added to fix YouTube thumbnails
      },
      {
        protocol: "https",
        hostname: "img.youtube.com", // ✅ Added for YouTube thumbnails
      },
    ],
  },
  output: "standalone",
  // Transpile specific modules
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-spring/three",
    "meshline",
  ],
};

module.exports = nextConfig;
