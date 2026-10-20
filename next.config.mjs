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
  { source: '/eot-crane-manufacturer-vapi', destination: '/eot-crane-manufacturer-in-vapi', permanent: true },
  { source: '/eot-crane-manufacturer-in-maharashtra', destination: '/crane/eot-crane-manufacturer-maharashtra', permanent: true },
  { source: '/crane-manufacturers-in-maharashtra', destination: '/crane/eot-crane-manufacturer-maharashtra', permanent: true },
 { source: '/crane-manufacturers-in-maharashtra', destination: '/crane/eot-crane-manufacturer-maharashtra', permanent: true },
 
   { source: '/eot-crane-manufacturer-in-tamilnadu', destination: '/crane/eot-crane-manufacturer-in-tamil-nadu', permanent: true },




   // Gujarat
      { source: '/eot-crane-manufacturers-in-gujarat', destination: '/crane/eot-crane-manufacturer-in-gujarat', permanent: true },

      // Delhi NCR
      { source: '/crane/eot-crane-manufacturer-in-delhi-ncr', destination: '/eot-crane-manufacturer-in-delhi-ncr', permanent: true },
      { source: '/eot-crane-manufacturer-in-delhi', destination: '/eot-crane-manufacturer-in-delhi-ncr', permanent: true },
      { source: '/eot-crane-company-in-delhi', destination: '/eot-crane-manufacturer-in-delhi-ncr', permanent: true },

      // Pune - EOT intent
      { source: '/eot-crane-manufacturer-in-pune', destination: '/crane/eot-crane-manufacturers-in-pune', permanent: true },
      { source: '/eot-crane-in-pune', destination: '/crane/eot-crane-manufacturers-in-pune', permanent: true },

      // Pune - generic intent
      { source: '/crane-manufacturers-in-pune', destination: '/crane-manufacturing-companies-in-pune', permanent: true },
      { source: '/overhead-crane-manufacturers-in-pune', destination: '/crane-manufacturing-companies-in-pune', permanent: true },

      // Faridabad
      { source: '/eot-crane-manufacturers-in-faridabad', destination: '/crane/eot-crane-manufacturers-in-faridabad', permanent: true },
      { source: '/eot-crane-company-in-faridabad', destination: '/crane/eot-crane-manufacturers-in-faridabad', permanent: true },
      { source: '/overhead-crane-suppliers-in-faridabad', destination: '/crane/eot-crane-manufacturers-in-faridabad', permanent: true },

      // Ahmedabad
      { source: '/eot-crane-manufacturers-in-ahmedabad', destination: '/crane-manufacturer-in-ahmedabad', permanent: true },
      { source: '/overhead-crane-manufacturers-in-ahmedabad', destination: '/crane-manufacturer-in-ahmedabad', permanent: true },

      // Chennai
      { source: '/crane-suppliers-in-chennai', destination: '/eot-crane-manufacturers-in-chennai', permanent: true },

      // Karnataka
      { source: '/eot-crane-manufacturers-in-karnataka', destination: '/crane/eot-crane-manufacturers-in-karnataka', permanent: true },

      // Hyderabad
      { source: '/eot-crane-manufacturer-in-hyderabad', destination: '/eot-crane-manufacturers-in-hyderabad', permanent: true },

      // Ludhiana
      { source: '/eot-crane-manufacturer-in-ludhiana', destination: '/eot-crane-manufacturers-in-ludhiana', permanent: true },

      // Double girder
      { source: '/crane/double-girder-eot-crane', destination: '/crane/double-girder-eot-crane-manufacturer', permanent: true },
      { source: '/crane/double-girder-eot-crane-supplier', destination: '/crane/double-girder-eot-crane-manufacturer', permanent: true },

      // Blog duplicate
      { source: '/blog/preventive-maintenance-checklist-for-eot-crane-in-2026', destination: '/blog/preventive-maintenance-checklist-for-eot-cranes-in-2026', permanent: true },

      // India
      { source: '/crane/crane-company-in-india', destination: '/crane/top-10-eot-crane-manufacturers-in-india', permanent: true },
      { source: '/crane/best-eot-crane-manufacturer-in-india', destination: '/crane/top-10-eot-crane-manufacturers-in-india', permanent: true },
      { source: '/crane/crane-manufacturers-in-india', destination: '/crane/top-10-eot-crane-manufacturers-in-india', permanent: true },
      { source: '/crane/crane-suppliers-in-india', destination: '/crane/top-10-eot-crane-manufacturers-in-india', permanent: true },
      { source: '/crane/crane-manufacturing-companies-in-india', destination: '/crane/top-10-eot-crane-manufacturers-in-india', permanent: true },
      { source: '/crane/crane-manufacturing-company-in-india', destination: '/crane/top-10-eot-crane-manufacturers-in-india', permanent: true },
      { source: '/crane/top-eot-crane-manufacturers-in-india', destination: '/crane/top-10-eot-crane-manufacturers-in-india', permanent: true },
      { source: '/crane/eot-crane-company-in-india', destination: '/crane/top-10-eot-crane-manufacturers-in-india', permanent: true },

 
 
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