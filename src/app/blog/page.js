import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";

import Blogs from "./_components/blog";
import { Container } from "@mui/material";

export const metadata = {
  title: "EOT Crane Blog: Guides, Prices and Maintenance | Timeskrane",
  description:
    "Read practical guides on EOT crane selection, price, maintenance and safety from Timeskrane engineers.",
  alternates: {
    canonical: "https://www.timeskrane.com/blog",
  },
};

export default function BlogMainPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <Breadcrumb
          title="Our Blogs"
          backgroundImage="/img/header1.webp"
          items={[{ label: "Blogs", href: "Blogs", isCurrent: true }]}
        />

        <Container maxWidth="xl">
          <Blogs></Blogs>
        </Container>
      </div>
      <Footer />
    </>
  );
}
