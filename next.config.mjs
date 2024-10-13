/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/((?!.swa).*)/',
            destination: '/', 
            permanent: false,
          },
        ]
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/((?!.swa).*)/',
                    destination: '/', 
                }
            ]
        }
    },
};

export default nextConfig;
