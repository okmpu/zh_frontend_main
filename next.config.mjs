import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "127.0.0.1", 
            "okmpu.oquplatforms.com"
        ],
    },
};

export default withNextIntl(nextConfig);