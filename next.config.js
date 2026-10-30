/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const toHome = ["/blockchain", "/automation", "/custom-development", "/saas", "/rnd", "/research"].map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
    return [
      ...toHome,
      { source: "/blog/what-we-mean-by-venture-catalysts-studio", destination: "/blog/what-is-an-app-venture-studio", permanent: true },
      { source: "/blog/building-secure-apis-saas-client-platforms", destination: "/blog", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/downloads/app-release.apk",
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.android.package-archive",
          },
          {
            key: "Content-Disposition",
            value: 'attachment; filename="easy-invoice.apk"',
          },
        ],
      },
    ];
  },
  images: {
    // Vercel image optimization quota exceeded (402) — serve originals directly
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
        pathname: '/api/v1/image/**',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;
