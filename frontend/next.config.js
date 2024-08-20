/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
      },
      images: {
        loader: "default",
        domains: ["localhost", "127.0.0.1", "192.168.1.186"],
      },
  }

  module.exports = nextConfig