// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['geer.in'], // ✅ external image domain
  },
};

module.exports = nextConfig; // ✅ use CommonJS export
