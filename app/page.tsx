"use client";

import Profile from "../components/Profile";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import { experienceData } from "../utils/data/experience";
import ContactSection from "../components/contact/ContactSection";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = typeof window !== 'undefined' ? useSearchParams() : null;

  useEffect(() => {
    if (!searchParams) return;
    const scrollTo = searchParams.get('scrollTo');
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

