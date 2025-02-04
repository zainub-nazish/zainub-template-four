import type { NextConfig } from "next";

//  const nextConfig: NextConfig = {
  
//    eslint: {
//      ignoreDuringBuilds: true,
//    },
//    images: {
//     domains: ['your-external-image-source.com'], 
//     unoptimized: true, 
//   },

//  };


//export default nextConfig;


///////////////////////

//   /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**.cdn.sanity.io", // Sanity images ke liye
//       },
//     ],
//   },
//   };

// module.exports = nextConfig;


///////////

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // ✅ Allow Sanity's image CDN
  },
};

module.exports = nextConfig;