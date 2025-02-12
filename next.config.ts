import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    crossOrigin: "anonymous",
    images: {
        remotePatterns: [
            {
                hostname: "hackaweb.blob.core.windows.net",
            },
        ],
    },
};

export default nextConfig;
