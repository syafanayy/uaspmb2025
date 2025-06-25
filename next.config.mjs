/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
    formats: ["image/webp", "image/avif"],
  },
  env: {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  },
  output: "standalone", // ➕ tambahkan ini untuk hindari static export
  experimental: {
    serverActions: true, // biar future-proof
  },
};

export default nextConfig;
