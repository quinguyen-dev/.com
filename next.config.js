/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/intro",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
