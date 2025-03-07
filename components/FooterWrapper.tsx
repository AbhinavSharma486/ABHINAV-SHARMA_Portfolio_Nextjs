"use client"; // This makes it a client component

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer"));

export default function FooterWrapper() {
  const pathname = usePathname();

  // Hide Footer only on /project page
  if (pathname === "/projects") return null;
  if (pathname === "/my-story") return null;
  if (pathname === "/contact") return null;

  return <Footer />;
}
