/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Temporarily comment out the webpack configuration
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false;
  //     config.resolve.fallback.path = false;
  //   }
  //   return config;
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.path = false;
    }
    return config;
  },
  // Disable worker threads during build
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

module.exports = nextConfig