import dynamic from 'next/dynamic';
import { Metadata } from "next";
import SuspenseLoading from '../../components/ui/SuspenseLoading';

const Projects = dynamic(() => import('../../components/projects/Projects'), { loading: () => <SuspenseLoading /> });

export const metadata: Metadata = {
  title: "Abhinav Sharma - Projects",
  description: "Notable projects | Abhinav Sharma",
};

const Page = () => {
  return <Projects />;
};

export default Page;