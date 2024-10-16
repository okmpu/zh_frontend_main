import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
      {
        protocol: "https",
        hostname: "api.okmpu.kz",
        port: "",
      },
      {
        protocol: "http",
        hostname: "91.243.71.92",
        port: "",
      },
    ],
  }
};

export default withNextIntl(nextConfig);
