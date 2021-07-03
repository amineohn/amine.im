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
  env: {
    discordId: '762055588762877973',
  }
}