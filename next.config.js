const modulesForCompile = ['@capacitor-community/storage-react']
const withTM = require('next-transpile-modules')(modulesForCompile);
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports =withPlugins([withTM], nextConfig)
