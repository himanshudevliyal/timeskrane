/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

const blogSlugs = [
  "industrial-jib-cranes-india-buying-guide",
  "what-to-look-for-in-a-reliable-eot-crane-manufacturer",
  "top-industrial-jib-crane-manufacturer-in-india",
  "guide-to-kbk-double-girder-suspension-cranes-in-india",
  "where-to-buy-genuine-kone-spare-parts-in-india",
  "how-do-you-pick-the-best-industrial-eot-cranes-manufacturers",
  "top-industrial-eot-cranes-manufacturers-deliver-lasting-value",
  "how-to-choose-the-right-single-girder-crane-for-your-facility",
  "overhead-and-gantry-crane-manufacturer-in-india",
  "what-makes-eot-cranes-essential-for-heavy-industries",
  "what-does-a-complete-demag-and-kone-cranes-service-include",
  "how-to-choose-the-right-eot-crane-manufacturer-in-india",
  "why-choose-timeskrane-for-eot-cranes-in-india",
  "what-sets-a-great-eot-crane-manufacturer-apart-from-the-rest",
  "where-can-i-find-heavy-duty-eot-cranes-in-india",
  "complete-guide-to-eot-cranes-for-industrial-use",
];

const INDIA_HUB = "/crane/top-10-eot-crane-manufacturers-in-india";
const DOUBLE_GIRDER_HUB = "/crane/double-girder-eot-crane-manufacturer";

// /slug -> /crane/slug (default)
const craneSlugs = [
  "best-eot-crane-manufacturer-in-india",
  "over-head-crane-manufacturers",
  "bridge-crane-suppliers",
  "wire-rope-hoist-manufacturers-in-india",
  "double-girder-eot-crane",
  "overhead-crane-manufacturers-in-india",
  "gantry-crane-manufacturers",
  "eot-crane-maintenance",
  "chain-hoist-manufacturers",
  "jib-crane-manufacturers",
  "single-girder-eot-crane-manufacturer",
  "eot-crane-components",
  "crane-manufacturing-companies-in-india",
  "overhead-crane-supplier",
  "double-girder-eot-crane-supplier",
  "top-10-eot-crane-manufacturers-in-india",
  "eot-crane-manufacturers-in-mumbai",
  "overhead-crane-manufacturers",
  "eot-crane-manufacturers-in-pune",
  "eot-crane-manufacturers-in-kolkata",
  "eot-crane-manufacturers-in-ghaziabad",
];

// Slugs whose /crane/<slug> page is itself redirected further.
// Yahan seedha final destination do taaki redirect chain na bane.
const craneOverrides = {
  "best-eot-crane-manufacturer-in-india": INDIA_HUB,
  "crane-manufacturing-companies-in-india": INDIA_HUB,
  "double-girder-eot-crane": DOUBLE_GIRDER_HUB,
  "double-girder-eot-crane-supplier": DOUBLE_GIRDER_HUB,
};

const r = (source, destination) => ({ source, destination, permanent: true });

const nextConfig = {
  images: {
    remotePatterns: [
      // Dev tunnel sirf development me
      ...(isDev
        ? [
            {
              protocol: "https",
              hostname: "n84j51mp-3001.inc1.devtunnels.ms",
              pathname: "/**",
            },
          ]
        : []),
      { protocol: "https", hostname: "www.facebook.com", pathname: "/**" },
      { protocol: "https", hostname: "timeskrane.com", pathname: "/**" },
      { protocol: "https", hostname: "timeskraneapi.bwdemo.in", pathname: "/**" },
    ],
  },

  async redirects() {
    return [
      // Blog posts: /slug -> /blog/slug
      ...blogSlugs.map((s) => r(`/${s}`, `/blog/${s}`)),

      // Crane pages: /slug -> /crane/slug (or override)
      ...craneSlugs.map((s) => r(`/${s}`, craneOverrides[s] ?? `/crane/${s}`)),

      // Surat / Ahmedabad / Vapi
      r("/eot-crane-manufacturer-surat", "/eot-crane-manufacturer-in-surat"),
      r("/eot-crane-manufacturers-in-surat", "/eot-crane-manufacturer-in-surat"),
      r("/gantry-crane-manufacturers-ahmedabad", "/gantry-crane-manufacturers-in-ahmedabad"),
      r("/eot-crane-manufacturer-vapi", "/eot-crane-manufacturer-in-vapi"),

      // Maharashtra
      r("/eot-crane-manufacturer-in-maharashtra", "/crane/eot-crane-manufacturer-maharashtra"),
      r("/crane-manufacturers-in-maharashtra", "/crane/eot-crane-manufacturer-maharashtra"),

      // Tamil Nadu
      r("/eot-crane-manufacturer-in-tamilnadu", "/crane/eot-crane-manufacturer-in-tamil-nadu"),

      // Gujarat
      r("/eot-crane-manufacturers-in-gujarat", "/crane/eot-crane-manufacturer-in-gujarat"),

      // Pune - EOT intent
      r("/eot-crane-manufacturer-in-pune", "/crane/eot-crane-manufacturers-in-pune"),
      r("/eot-crane-in-pune", "/crane/eot-crane-manufacturers-in-pune"),

      // Pune - generic intent
      r("/crane-manufacturers-in-pune", "/crane-manufacturing-companies-in-pune"),
      r("/overhead-crane-manufacturers-in-pune", "/crane-manufacturing-companies-in-pune"),

      // Faridabad
      r("/eot-crane-manufacturers-in-faridabad", "/crane/eot-crane-manufacturers-in-faridabad"),
      r("/eot-crane-company-in-faridabad", "/crane/eot-crane-manufacturers-in-faridabad"),
      r("/overhead-crane-suppliers-in-faridabad", "/crane/eot-crane-manufacturers-in-faridabad"),

      // Delhi NCR
      r("/eot-crane-manufacturer-in-delhi", "/crane/eot-crane-manufacturer-in-delhi-ncr"),
      r("/eot-crane-company-in-delhi", "/crane/eot-crane-manufacturer-in-delhi-ncr"),

      // Ahmedabad
      r("/eot-crane-manufacturers-in-ahmedabad", "/crane-manufacturer-in-ahmedabad"),
      r("/overhead-crane-manufacturers-in-ahmedabad", "/crane-manufacturer-in-ahmedabad"),

      // Chennai
      r("/crane-suppliers-in-chennai", "/eot-crane-manufacturers-in-chennai"),

      // Karnataka
      r("/eot-crane-manufacturer-in-karnataka", "/crane/eot-crane-manufacturer-in-karnataka"),

      // Hyderabad
      r("/eot-crane-manufacturer-in-hyderabad", "/eot-crane-manufacturers-in-hyderabad"),

      // Ludhiana
      r("/eot-crane-manufacturer-in-ludhiana", "/eot-crane-manufacturers-in-ludhiana"),

      // Double girder (/crane/ prefixed)
      r("/crane/double-girder-eot-crane", DOUBLE_GIRDER_HUB),
      r("/crane/double-girder-eot-crane-supplier", DOUBLE_GIRDER_HUB),

      // Blog duplicate
      r(
        "/blog/preventive-maintenance-checklist-for-eot-crane-in-2026",
        "/blog/preventive-maintenance-checklist-for-eot-cranes-in-2026"
      ),

      // India hub
      r("/crane/crane-company-in-india", INDIA_HUB),
      r("/crane/best-eot-crane-manufacturer-in-india", INDIA_HUB),
      r("/crane/crane-manufacturers-in-india", INDIA_HUB),
      r("/crane/crane-suppliers-in-india", INDIA_HUB),
      r("/crane/crane-manufacturing-companies-in-india", INDIA_HUB),
      r("/crane/crane-manufacturing-company-in-india", INDIA_HUB),
      r("/crane/top-eot-crane-manufacturers-in-india", INDIA_HUB),
      r("/crane/eot-crane-company-in-india", INDIA_HUB),

      // /blogs/* -> /blog/*
      r("/blogs/:slug", "/blog/:slug"),
    ];
  },
};

export default nextConfig;
