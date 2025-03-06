import SuspenseLoading from "@/components/ui/SuspenseLoading";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), { loading: () => <SuspenseLoading /> });

const Page = () => {
  return <Footer />;
};

export default Page;