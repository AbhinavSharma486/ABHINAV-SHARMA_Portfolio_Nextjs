"use client"; // This makes it a client component

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer"));

export default function FooterWrapper() {
  const pathname = usePathname();

  // Hide Footer on home, /project, /my-story, and /contact pages
  if (pathname === "/" || pathname === "/projects" || pathname === "/my-story" || pathname === "/contact") return null;

  return <Footer />;
}
