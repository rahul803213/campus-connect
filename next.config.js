/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/reset-password': { page: '/reset-password' },
          '/reset-password/123': { page: '/reset-password', query: { token: '123' } },
          }
      },
}

module.exports = nextConfig
