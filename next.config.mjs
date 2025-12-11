// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.NEXTJS_ANALYZE === 'true',
// })

// module.exports = withBundleAnalyzer({});

// export default nextConfig;
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.NEXTJS_ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withBundleAnalyzer(nextConfig);