/** @type {import('next').NextConfig} */
const LocalesEnum = {
  default: "default",
  frFR: "fr",
};
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  i18n: {
    locales: Object.values(LocalesEnum),
    defaultLocale: "fr",
    localeDetection: false,
  },
  //Docker support
  experimental: {
    outputStandalone: true,
  },
  experimental: {
    externalDir: true,
  },
  // Potential new config flag:
};

module.exports = nextConfig;
