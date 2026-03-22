/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/henryseo1000.github.io',
    assetPrefix : process.env.NODE_ENV === "production" ? "https://henryseo1000.github.io" : ""
};

export default nextConfig;
