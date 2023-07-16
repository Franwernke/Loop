/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

module.exports = nextConfig
