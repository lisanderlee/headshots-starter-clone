/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["files.cdn.printful.com"],
  },
}

module.exports = nextConfig
