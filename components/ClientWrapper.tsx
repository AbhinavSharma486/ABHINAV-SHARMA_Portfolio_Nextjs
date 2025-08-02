"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./FooterWrapper"), {
  ssr: false,
  loading: () => <div className="h-32 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent" />
});

const PerformanceMonitor = dynamic(() => import("./Performance/PerformanceMonitor"), {
  ssr: false
});

export default function ClientWrapper() {
  return (
    <>
      <Footer />
      <PerformanceMonitor />
    </>
  );
} 