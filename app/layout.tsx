import "./globals.css";
import localFont from "next/font/local";
import Nav from "../components/navigation/Navigation";
import type { Metadata } from "next";
import Theme from "../context/theme-provider";
import ClientWrapper from "../components/ClientWrapper";

export const metadata: Metadata = {
  title: "Abhinav Sharma | Full Stack Developer | Personal Portfolio",
  description: "Abhinav Sharma Personal Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    'theme-color': '#7c3aed',
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
  display: 'swap',
  preload: true,
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
  display: 'swap',
  preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/assets/images/profileimg.webp" as="image" type="image/webp" />
        <link rel="preload" href="/assets/images/logo.webp" as="image" type="image/webp" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={`${orbitron.variable} ${eduNSW.variable}`}>
        <Theme>
          <Nav />
          <main>{children}</main>
          <ClientWrapper />
        </Theme>
      </body>
    </html>
  );
}
