const path = require("path");

const config = {
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
    domains: [
      {
        domain: "localhost:3001",
        defaultLocale: "en",
        http: true,
      },
      {
        domain: "de.localhost:3001",
        defaultLocale: "de",
        http: true,
      },
    ],
    localeDetection: true,
  },
  localePath: path.resolve("./public/static/locales"),
  defaultNS: "website",
  debug: true
};

module.exports = config;
