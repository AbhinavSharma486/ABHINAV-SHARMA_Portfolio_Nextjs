"use client";

import { experienceData } from "../utils/data/experience";
import { educationData } from "../utils/data/education";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "../components/Profile";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import ContactSection from "../components/contact/ContactSection";
import ScrollToTop from "../components/ui/ScrollToTop";
import Certificates from "../components/certificates/Certificate";
import EducationTimeline from "@/components/education/educationTimeline";

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
      <Certificates />
      <EducationTimeline education={educationData} />
      <ExperienceTimeline experiences={experienceData} />
      <Projects />
      <ContactSection />
      <ScrollToTop />
    </>
  );
}

