import { Metadata } from "next";
import Projects from '../../components/projects/Projects';

export const metadata: Metadata = {
  title: "Abhinav Sharma - Projects",
  description: "Notable projects | Abhinav Sharma",
};

const Page = () => {
  return <Projects />;
};

export default Page;