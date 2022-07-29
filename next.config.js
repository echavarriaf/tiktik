/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.pixabay.com",
      "file-uploads.teachablecdn.com",
      "p16-amd-va.tiktokcdn.com",
      "image.shutterstock.com",
    ],
  },
};

module.exports = nextConfig;
