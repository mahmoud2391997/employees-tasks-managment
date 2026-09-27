/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['nodemailer'],
  experimental: {
    // Keep parity with the ERP app's node runtime expectations.
  },
}

export default nextConfig

