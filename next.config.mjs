import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV !== "production" ? "" : "/vrai-architecture",
  output: "export",
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
