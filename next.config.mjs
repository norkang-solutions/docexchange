/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/((?!.swa).*)/",
                destination: "/",
                permanent: false,
            },
        ];
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: "/((?!.swa).*)/",
                    destination: "/",
                },
            ],
        };
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.licdn.com",
                port: "",
                pathname: "/dms/image/**",
            },
        ],
    },
};

export default nextConfig;
