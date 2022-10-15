/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ncpwd.go.ke", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
