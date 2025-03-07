import React from 'react';
import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const MyStory = dynamic(() => import('../../components/story/MyStory'), { loading: () => <SuspenseLoading /> });


export const metadata: Metadata = {
  title: "My story - Abhinav Sharma",
  description:
    "A passionate web developer. | Abhinav Sharma",
};

const Page = () => {
  return <MyStory />;
};

export default Page;