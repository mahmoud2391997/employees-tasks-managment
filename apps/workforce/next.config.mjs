import { fileURLToPath } from 'node:url'
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['nodemailer'],
  outputFileTracingRoot: fileURLToPath(new URL('../../', import.meta.url)),
  webpack(config, { isServer }) {
    // The generated client lives in a sibling workspace. Copy its native
    // engine beside the bundled server code and include it in route traces.
    if (isServer) config.plugins.push(new PrismaPlugin())
    return config
  },
}

export default nextConfig
