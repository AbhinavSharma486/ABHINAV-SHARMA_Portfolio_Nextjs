import { Metadata } from "next";
import Skills from "../../components/skills/Skills";


export const metadata: Metadata = {
  title: "Abhinav Sharma - Skills",
  description: "Skills | Abhinav Sharma",
};

const Page = () => {
  return <Skills />;
};

export default Page;