import { Metadata } from "next";
import Certificates from "@/components/certificates/Certificate";


export const metadata: Metadata = {
  title: "Abhinav Sharma - Certificates",
  description: "Certificates | Abhinav Sharma",
};

const Page = () => {
  return <Certificates />;
};

export default Page;