import dotenv from "dotenv";
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    MAP_ID: process.env.MAP_ID,
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
