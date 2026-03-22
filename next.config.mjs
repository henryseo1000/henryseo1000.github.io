import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    output: 'export',
    basePath: process.env.NODE_ENV === "production" ? "/henryseo1000.github.io" : "",
    assetPrefix : process.env.NODE_ENV === "production" ? "https://henryseo1000.github.io" : ""
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
