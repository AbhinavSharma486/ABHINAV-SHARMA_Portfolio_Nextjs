import { Metadata } from "next";
import { experienceData } from "../../utils/data/experience.js";
import ExperienceTimeline from "../../components/experience/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience - Abhinav Sharma",
  description: "Internship and work experience timeline | Abhinav Sharma",
};

const Page = () => {
  return <ExperienceTimeline experiences={experienceData} />;
};

export default Page; 