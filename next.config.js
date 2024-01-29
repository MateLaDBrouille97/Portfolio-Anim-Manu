/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
          {
            protocol:"https",
            hostname:"res.cloudinary.com"

        },
        {
            protocol:"https",
            hostname:"utfs.io"

        },
        {
            protocol:"https",
            hostname:"img.clerk.com"

        },
        {
            protocol:"https",
            hostname:"images.unsplash.com"

        },
        ],
        
    },
    env: {
        AWS_EXPORT_FILE: './aws-exports.js',
      }
}

module.exports = nextConfig
