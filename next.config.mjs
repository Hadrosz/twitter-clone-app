/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
