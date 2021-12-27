const withPlugins = require("next-compose-plugins");

const withVideos = require("next-videos");

const nextConfig = {
  images: {
    domains: ["assets.coingecko.com"],
  },
};

module.exports = withPlugins([[withVideos]], nextConfig);
