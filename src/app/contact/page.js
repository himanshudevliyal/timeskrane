import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import DemaggNavbar from "@/componts/nav";
import ContactForm from "./contact";

export const metadata = {
  title: "Contact Timeskrane | Get an EOT Crane Quote in India",
  description:
    "Send your load, span and location to Timeskrane and get a quotation or site-survey call from our engineers.",
  alternates: {
    canonical: "https://www.timeskrane.com/contact",
  },
};

export default function Contact(params) {
  return (
    <>
      <DemaggNavbar></DemaggNavbar>

      <Breadcrumb
        title="Contact Us"
        backgroundImage="/img/header1.webp"
        items={[{ label: "Contact", href: "/", isCurrent: true }]}
      />

      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}
