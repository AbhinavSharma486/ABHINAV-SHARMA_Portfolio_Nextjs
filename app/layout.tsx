import "./globals.css";
import { Edu_NSW_ACT_Foundation, Orbitron } from "next/font/google";
import Nav from "../components/navigation/Navigation";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Theme from "../context/theme-provider";

const Footer = dynamic(() => import("../components/FooterWrapper"));

export const metadata: Metadata = {
  title: "Abhinav Sharma | Full Stack Developer | Personal Portfolio",
  description: "Abhinav Sharma Personal Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
});

export const eduNSW = Edu_NSW_ACT_Foundation({
  subsets: ["latin"],
  variable: "--font-edu-nsw",
  weight: ["400"],
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${eduNSW.variable}`}>
        <Theme>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
