"use client";

import dynamic from "next/dynamic";
import { experienceData } from "../utils/data/experience";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Lazy load heavy components
const Profile = dynamic(() => import("../components/Profile"), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-violet-500"></div></div>,
  ssr: true
});

const Skills = dynamic(() => import("../components/skills/Skills"), {
  loading: () => <div className="py-12 md:py-16 bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a]"><div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div></div>,
  ssr: true
});

const Projects = dynamic(() => import("../components/projects/Projects"), {
  loading: () => <div className="pt-20 bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a]"><div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div></div>,
  ssr: true
});

const ExperienceTimeline = dynamic(() => import("../components/experience/ExperienceTimeline"), {
  loading: () => <div className="py-8 min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a]"><div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div></div>,
  ssr: true
});

const ContactSection = dynamic(() => import("../components/contact/ContactSection"), {
  loading: () => <div className="py-8 min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a]"><div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div></div>,
  ssr: true
});

export default function Page() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scrollTo = searchParams?.get('scrollTo');
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [searchParams]);

  return (
    <>
      <Profile />
      <Skills />
      <ExperienceTimeline experiences={experienceData} />
      <Projects />
      <ContactSection />
    </>
  );
}

