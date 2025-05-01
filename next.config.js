/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholder.com'], // Add any image domains you might use
  },
  // Add any additional configuration here
}

module.exports = nextConfig
