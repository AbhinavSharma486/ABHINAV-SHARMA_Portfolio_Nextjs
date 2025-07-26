import Profile from "../components/Profile";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import { experienceData } from "../utils/data/experience";
import ContactSection from "../components/contact/ContactSection";

export default function page() {
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

