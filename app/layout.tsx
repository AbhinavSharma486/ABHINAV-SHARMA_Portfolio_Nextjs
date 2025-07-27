import "./globals.css";
import localFont from "next/font/local";
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

// Use local fonts instead of Google Fonts
const orbitron = localFont({
  src: [
    {
      path: '../fonts/Orbitron/static/Orbitron-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Orbitron/static/Orbitron-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Orbitron/static/Orbitron-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Orbitron/static/Orbitron-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-orbitron",
});

export const eduNSW = localFont({
  src: [
    {
      path: '../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: "--font-edu-nsw",
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${eduNSW.variable}`}>
        <Theme>
          <Nav />
          <main>{children}</main>
          <Footer />
          {/* Temporarily disabled for debugging */}
          {/* <ServiceWorkerRegistration />
          <PerformanceMonitor /> */}
        </Theme>
      </body>
    </html>
  );
}
