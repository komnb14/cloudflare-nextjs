/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  generateEtags:false,
  experimental: {
    runtime: "experimental-edge",
  },
}

module.exports = nextConfig
