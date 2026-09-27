/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.qrserver.com", "res.cloudinary.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
