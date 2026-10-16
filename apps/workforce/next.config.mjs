import { fileURLToPath } from 'node:url'
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() { return [{source:'/:path*',headers:[
    {key:'X-Content-Type-Options',value:'nosniff'},
    {key:'X-Frame-Options',value:'DENY'},
    {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
    {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'},
    {key:'Content-Security-Policy',value:"frame-ancestors 'none'; base-uri 'self'; object-src 'none'"},
  ]}] },
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
