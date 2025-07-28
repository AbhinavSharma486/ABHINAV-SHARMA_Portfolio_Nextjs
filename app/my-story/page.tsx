import React from 'react';
import { Metadata } from "next";
import MyStory from '../../components/story/MyStory';

export const metadata: Metadata = {
  title: "My story - Abhinav Sharma",
  description: "A passionate web developer. | Abhinav Sharma",
};

const Page = () => {
  return <MyStory />;
};

export default Page;