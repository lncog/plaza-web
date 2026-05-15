import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // To test on a phone over LAN during dev, uncomment and add your laptop's
  // local IP (find it with `ipconfig getifaddr en0`). Otherwise Next.js blocks
  // cross-origin HMR and your phone won't hot-reload.
  // allowedDevOrigins: ["192.168.x.x"],
};

export default nextConfig;
