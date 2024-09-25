/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV !== "production" ? "" : "/vrai-architecture",
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  reactStrictMode: true,
};

export default nextConfig;
