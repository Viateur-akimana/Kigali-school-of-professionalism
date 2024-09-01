/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['socket.io'],
  
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  webpack(config) {
    config.resolve.alias['@api'] = './src/app/api';
    return config;
  }
}

export default nextConfig;
