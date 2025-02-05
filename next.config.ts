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

//      /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["cdn.sanity.io"], // ✅ Allow Sanity's image CDN
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdn.sanity.io', // Agar external images use ho rahi hain toh
      },
    ],
  },

};


module.exports = nextConfig;


 const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true',
 });

 module.exports = withBundleAnalyzer({
   // aapki aur configurations yahan ho sakti hain
 });






