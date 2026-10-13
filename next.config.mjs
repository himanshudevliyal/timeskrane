/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "n84j51mp-3001.inc1.devtunnels.ms",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "timeskrane.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "timeskraneapi.bwdemo.in",
        pathname: "/**",
      },
    ],
  },

async redirects() {
  const blogSlugs = [
    'industrial-jib-cranes-india-buying-guide',
    'what-to-look-for-in-a-reliable-eot-crane-manufacturer',
    'top-industrial-jib-crane-manufacturer-in-india',
    'guide-to-kbk-double-girder-suspension-cranes-in-india',
    'where-to-buy-genuine-kone-spare-parts-in-india',
    'how-do-you-pick-the-best-industrial-eot-cranes-manufacturers',
    'top-industrial-eot-cranes-manufacturers-deliver-lasting-value',
    'how-to-choose-the-right-single-girder-crane-for-your-facility',
    'overhead-and-gantry-crane-manufacturer-in-india',
    'what-makes-eot-cranes-essential-for-heavy-industries',
    'what-does-a-complete-demag-and-kone-cranes-service-include',
    'how-to-choose-the-right-eot-crane-manufacturer-in-india',
    'why-choose-timeskrane-for-eot-cranes-in-india',
    'what-sets-a-great-eot-crane-manufacturer-apart-from-the-rest',
    'where-can-i-find-heavy-duty-eot-cranes-in-india',
    'complete-guide-to-eot-cranes-for-industrial-use',
  ];

  const craneSlugs = [
    'best-eot-crane-manufacturer-in-india',
    'over-head-crane-manufacturers',
    'bridge-crane-suppliers',
    'wire-rope-hoist-manufacturers-in-india',
    'double-girder-eot-crane',
    'overhead-crane-manufacturers-in-india',
    'gantry-crane-manufacturers',
    'eot-crane-maintenance',
    'chain-hoist-manufacturers',
    'jib-crane-manufacturers',
    'single-girder-eot-crane-manufacturer',
    'eot-crane-components',
    'crane-manufacturing-companies-in-india',
    'overhead-crane-supplier',
    'double-girder-eot-crane-supplier',
    'top-10-eot-crane-manufacturers-in-india',
    'eot-crane-manufacturers-in-mumbai',
    'overhead-crane-manufacturers',
    'eot-crane-manufacturers-in-pune',
    'eot-crane-manufacturers-in-kolkata',
    'eot-crane-manufacturers-in-ghaziabad',
  ];

  return [
    // Blog posts: /slug -> /blog/slug
    ...blogSlugs.map((s) => ({
      source: `/${s}`,
      destination: `/blog/${s}`,
      permanent: true,
    })),

    // Crane pages: /slug -> /crane/slug
    ...craneSlugs.map((s) => ({
      source: `/${s}`,
      destination: `/crane/${s}`,
      permanent: true,
    })),

    // City URL fixes
    { source: '/eot-crane-manufacturer-surat', destination: '/eot-crane-manufacturer-in-surat', permanent: true },
    { source: '/eot-crane-manufacturers-in-surat', destination: '/eot-crane-manufacturer-in-surat', permanent: true },
    { source: '/gantry-crane-manufacturers-ahmedabad', destination: '/gantry-crane-manufacturers-in-ahmedabad', permanent: true },
    { source: '/eot-crane-manufacturer-vapi', destination: '/eot-crane-manufacturer-in-vapi', permanent: true },

    // Delhi NCR
    {
      source: '/eot-crane-manufacturer-in-delhi-ncr',
      destination: '/crane/eot-crane-manufacturer-in-delhi-ncr',
      permanent: true,
    },

    // /blogs/* -> /blog/*
    {
      source: '/blogs/:slug',
      destination: '/blog/:slug',
      permanent: true,
    },
  ];
},
};

export default nextConfig;