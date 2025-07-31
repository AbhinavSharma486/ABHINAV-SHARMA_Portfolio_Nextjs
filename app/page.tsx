"use client";

import { experienceData } from "../utils/data/experience";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "../components/Profile";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import ContactSection from "../components/contact/ContactSection";
import ScrollToTop from "../components/ui/ScrollToTop";

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
      <ScrollToTop />
    </>
  );
}

