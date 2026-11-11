// gallery/page.js is a client component and can't export metadata,
// so the gallery's SEO metadata lives here.
export const metadata = {
  title: "EOT Crane Project Gallery | Timeskrane",
  description:
    "See EOT cranes, hoists and KBK systems built and installed by Timeskrane for industrial plants across India.",
  alternates: {
    canonical: "https://www.timeskrane.com/gallery",
  },
};

export default function GalleryLayout({ children }) {
  return children;
}
