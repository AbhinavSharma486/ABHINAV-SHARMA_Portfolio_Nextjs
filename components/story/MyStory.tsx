'use client';

import React from 'react';
import { birthday } from '@/helpers';

const biographyContent = [
  {
    id: 'intro',
    content: `Abhinav Sharma, also known as Vasu Sharma, is a talented MERN full-stack developer with a passion for building exceptional web applications. He was born in Baraut, Uttar Pradesh, on April 5, 2004, and is currently ${birthday(new Date('05-04-2004'))}`
  },
  {
    id: 'growth',
    content: 'When I passed 12th grade, I had no idea that I would pursue a BCA degree. I initially wanted to do BTech, but due to my family financial situation, that was not possible. My father passed away while I was giving my 12th CBSE board exams, leaving my mother as the sole provider. She works as a staff nurse in a private hospital. Given our financial constraints, I decided to enroll in BCA instead. From the day I took admission, I started researching what skills I needed to develop and how to secure a job, as I had no hope for placements from my college. True to my expectations, there were no placement opportunities. So, I took matters into my own hands and began my web development journey.'
  },
  {
    id: 'development',
    content: 'I started with HTML and CSS, then moved on to JavaScript, built some projects, and later transitioned to React. Over time, I expanded my knowledge to backend development with Node.js and Express, and learned MongoDB for database management. Every day, I worked on improving my skills. What makes my journey unique is that I have never taken a single paid course to learn web development. Everything I know today, I have learned entirely from YouTube, making me a completely self-taught full-stack developer.'
  },
  {
    id: 'portfolio',
    content: 'Now, I have built an impressive portfolio showcasing my expertise in developing dynamic, responsive, and visually appealing web applications.'
  },
  {
    id: 'skills',
    content: 'Beyond my technical abilities, I have a strong eye for design and aesthetics, allowing me to craft stunning and user-friendly interfaces. I am always eager to learn and stay updated with the latest technologies and trends in the ever-evolving field of web development.'
  },
  {
    id: 'conclusion',
    content: 'My journey is a testament to the power of self-education and perseverance. My passion and dedication have shaped me into a skilled developer and a source of inspiration for aspiring developers worldwide.'
  }
];

const MyStory = () => {
  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-10">
        <header className="max-w-4xl mx-auto mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold font-orbitron text-center text-blue-950 dark:text-white mb-8"
            id="about-title"
          >
            About Me
          </h1>

          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500" />

            <img
              src="/assets/images/profile-img.webp"
              alt="Portrait of Abhinav Sharma - Full Stack MERN Developer"
              className="w-full h-auto object-cover relative z-10"
              width={1200}
              height={675}
              loading="eager"
            />
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <section
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8"
            aria-labelledby="bio-title"
          >
            <h2
              id="bio-title"
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Who is Abhinav Sharma?
            </h2>

            <div className="space-y-6">
              {
                biographyContent.map((section) => (
                  <p
                    key={section.id}
                    className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed"
                  >
                    {section.content}
                  </p>
                ))
              }
            </div>
          </section>
        </main>
      </div>
    </article>
  );
};

export default MyStory;