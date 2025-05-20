/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // ✅ Added to fix your error
      },
    ],
    domains: [
      'upload.wikimedia.org',
      'www.google.com',
      'img-prod-cms-rt-microsoft-com.akamaized.net',
      'storage.googleapis.com',
      'www.apple.com',
      'www.ibm.com',
      'www.intel.com',
      'www.samsung.com',
      'www.netflix.com',
      'www.adobe.com',
      'www.spotify.com',
      'www.tesla.com',
      'www.twitter.com',
      'www.oracle.com',
      'www.nvidia.com',
      'www.salesforce.com'
    ],
  },
  output: "standalone",
  webpack: (config) => {
    // Add support for GLB/GLTF files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
    });

    // Provide fallbacks for node-specific modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    return config;
  },
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
