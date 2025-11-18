/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["geist"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.UPLOADTHING_APP_ID}.ufs.sh`,
        pathname: "/f/*",
      },
    ],
  },
};

export default nextConfig;
