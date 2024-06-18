/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  siteUrl: `https://${process.env.URL}`,
  generateRobotsTxt: true,
};

export default nextConfig;
