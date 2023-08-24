/** @type {import('next').NextConfig} */
const nextConfig = {
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
  output: "standalone",
};

module.exports = nextConfig;
