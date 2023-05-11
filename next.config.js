const { NextResponse } = require('next/server');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  async middleware(req, event) {
    console.log("middleware.ts running");
    console.log(req.nextUrl.domainLocale)
    return NextResponse.next();
  }
}

module.exports = nextConfig
