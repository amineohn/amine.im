const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: false,
  basePath: "",
  reactStrictMode: true,
});
module.exports = {
  webpack5: false,
  webpack: (config) => {
    config.node = {
      dns: "mock",
      fs: "empty",
      path: true,
      url: false,
    };
    return config;
  },
};
