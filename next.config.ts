import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    crossOrigin: "anonymous",
    images: {
        domains: ["hackaweb.blob.core.windows.net"],
    },
};

export default nextConfig;
