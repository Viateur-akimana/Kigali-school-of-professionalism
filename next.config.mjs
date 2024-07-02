/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol: "https", hostname:"www.pexels.com"}
        ]
    }
};

export default nextConfig;
