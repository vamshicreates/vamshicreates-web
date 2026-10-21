/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return ["vamshicreates-web.vercel.app", "vamshicreates.tech"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: "https://www.vamshicreates.tech/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
