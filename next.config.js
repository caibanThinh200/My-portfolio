/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['three'])
const nextConfig = {
  reactStrictMode: true,
  // transpilePackages: false
}

module.exports = {...nextConfig, ...withTM()}
