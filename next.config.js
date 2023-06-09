/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "meo.comick.pictures",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "uploads.mangadex.org",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
