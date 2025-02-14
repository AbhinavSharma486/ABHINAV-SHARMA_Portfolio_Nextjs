import "./globals.css";
import type { Metadata } from "next";
import { Edu_NSW_ACT_Foundation, Geist, Geist_Mono, Orbitron } from "next/font/google";
import Nav from "../components/navigation/Navigation";
import React from "react";
import Theme from "../context/theme-provider";

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700'],
});

export const eduNSW = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
  variable: '--font-edu-nsw',
  weight: ['400'], // Only one weight is available for this font
});

export const metadata: Metadata = {
  title: "Abhinav Sharma | Full Stack developer | Personal portfolio",
  description: "Abhinav Sharma Personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${eduNSW.variable}`}>
        <Theme>
          <Nav />
          <main>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
