import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV !== "production" ? "" : "/vrai-architecture",
  assetPrefix:
    process.env.NODE_ENV !== "production" ? "" : "/vrai-architecture/",
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
