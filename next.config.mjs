
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.NEXTJS_ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withBundleAnalyzer(nextConfig);