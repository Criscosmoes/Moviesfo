/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "www.google.com", "hips.hearstapps.com"],
  },
};

module.exports = nextConfig;
