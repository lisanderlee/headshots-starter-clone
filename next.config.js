/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.cdn.printful.com',
  
      },
      {
        protocol: 'https',
        hostname: 'sdbooth2-production.s3.amazonaws.com',
       
       
      },
    ],
 
  },
}

module.exports = nextConfig
