/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google Profile Pictures
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com', // Auth0 default Gravatars
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com', // Catch-all for other Google subdomains
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;