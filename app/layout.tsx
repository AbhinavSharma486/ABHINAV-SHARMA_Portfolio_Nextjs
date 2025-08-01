import "./globals.css";
import localFont from "next/font/local";
import Nav from "../components/navigation/Navigation";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Theme from "../context/theme-provider";
import ErrorBoundary from "../components/ui/ErrorBoundary";
import SkipLink from "../components/ui/SkipLink";
import { PersonStructuredData, WebsiteStructuredData } from "../components/SEO/StructuredData";

const Footer = dynamic(() => import("../components/FooterWrapper"));

export const metadata: Metadata = {
  title: "Abhinav Sharma | Full Stack Developer | Personal Portfolio",
  description: "MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB. View my projects, experience, and get in touch for collaborations.",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Portfolio"],
  authors: [{ name: "Abhinav Sharma" }],
  creator: "Abhinav Sharma",
  publisher: "Abhinav Sharma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Abhinav Sharma | Full Stack Developer",
    description: "MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Abhinav Sharma Portfolio',
    images: [
      {
        url: '/assets/images/profileimg.webp',
        width: 1200,
        height: 630,
        alt: 'Abhinav Sharma - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Abhinav Sharma | Full Stack Developer",
    description: "MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
    images: ['/assets/images/profileimg.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
      <head>
        <PersonStructuredData
          name="Abhinav Sharma"
          jobTitle="Full Stack Developer"
          description="MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB"
          email="abhinavsharma486@gmail.com"
          phone="+91 7819872024"
          location="Baraut, Uttar Pradesh"
          website="https://your-domain.com"
          github="https://github.com/AbhinavSharma486"
          linkedin="https://www.linkedin.com/in/abhinav-sharma-6254252a5/"
          skills={["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"]}
        />
        <WebsiteStructuredData
          name="Abhinav Sharma Portfolio"
          description="Personal portfolio website showcasing projects and skills"
          url="https://your-domain.com"
          author="Abhinav Sharma"
        />
      </head>
      <body className={`${orbitron.variable} ${eduNSW.variable}`}>
        <ErrorBoundary>
          <Theme>
            <SkipLink />
            <Nav />
            <main id="main-content" role="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            {/* Temporarily disabled for debugging */}
            {/* <ServiceWorkerRegistration />
            <PerformanceMonitor /> */}
          </Theme>
        </ErrorBoundary>
      </body>
    </html>
  );
}
