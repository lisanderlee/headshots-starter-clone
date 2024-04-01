/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["files.cdn.printful.com", "https://sdbooth2-production.s3.amazonaws.com/"],
  },
}

module.exports = nextConfig
