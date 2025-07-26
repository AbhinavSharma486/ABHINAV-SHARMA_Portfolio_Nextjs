import { Metadata } from "next";
import ContactSection from "../../components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact - Abhinav Sharma",
  description: "Get in touch with Abhinav Sharma | Contact for collaborations and opportunities",
};

const Page = () => {
  return <ContactSection />;
};

export default Page;