'use client';

import React from 'react';
import { birthday } from '@/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Code, Heart, Target, BookOpen } from 'lucide-react';

const biographyContent = [
  {
    id: 'intro',
    icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    title: "The Beginning",
    content: `Abhinav Sharma, also known as Vasu Sharma, is a talented MERN full-stack developer with a passion for building exceptional web applications. He was born in Baraut, Uttar Pradesh, on April 5, 2004, and is currently ${birthday(new Date('05-04-2004'))}`
  },
  {
    id: 'growth',
    icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    title: "The Challenge",
    content: 'When I passed 12th grade, I had no idea that I would pursue a BCA degree. I initially wanted to do BTech, but due to my family financial situation, that was not possible. My father passed away while I was giving my 12th CBSE board exams, leaving my mother as the sole provider. She works as a staff nurse in a private hospital. Given our financial constraints, I decided to enroll in BCA instead. From the day I took admission, I started researching what skills I needed to develop and how to secure a job, as I had no hope for placements from my college. True to my expectations, there were no placement opportunities. So, I took matters into my own hands and began my web development journey.'
  },
  {
    id: 'development',
    icon: <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    title: "The Journey",
    content: 'I started with HTML and CSS, then moved on to JavaScript, built some projects, and later transitioned to React. Over time, I expanded my knowledge to backend development with Node.js and Express, and learned MongoDB for database management. Every day, I worked on improving my skills. What makes my journey unique is that I have never taken a single paid course to learn web development. Everything I know today, I have learned entirely from YouTube, making me a completely self-taught full-stack developer.'
  },
  {
    id: 'skills',
    icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    title: "The Growth",
    content: 'Beyond my technical abilities, I have a strong eye for design and aesthetics, allowing me to craft stunning and user-friendly interfaces. I am always eager to learn and stay updated with the latest technologies and trends in the ever-evolving field of web development.'
  },
  {
    id: 'conclusion',
    icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    title: "The Inspiration",
    content: 'My journey is a testament to the power of self-education and perseverance. My passion and dedication have shaped me into a skilled developer and a source of inspiration for aspiring developers worldwide.'
  }
];

const MyStory = () => {
  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-violet-900/10 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-10">
        {/* Hero Section */}
        <motion.header
          className="max-w-6xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-orbitron text-center mb-6 sm:mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Story
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-center text-gray-700 dark:text-gray-200 mb-8 sm:mb-12 px-4 lg:px-0 lg:whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From humble beginnings to becoming a self-taught full-stack developer
          </motion.p>

          {/* Profile Card */}
          <motion.div
            className="relative max-w-sm sm:max-w-md md:max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl mb-4 sm:mb-6">
              <Image
                src="/assets/images/profileimg.webp"
                alt="Portrait of Abhinav Sharma - Full Stack MERN Developer"
                className="w-full h-auto object-cover"
                width={400}
                height={300}
                loading="eager"
              />
            </div>

            {/* Info Cards Below Image */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <motion.div
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl border border-white/20 dark:border-gray-700/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-violet-600 dark:text-violet-400" />
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Age</p>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white">{birthday(new Date('05-04-2004'))}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl border border-white/20 dark:border-gray-700/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Location</p>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white">Baraut, UP</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl border border-white/20 dark:border-gray-700/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Education</p>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white">BCA Student</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.header>

        {/* Story Content */}
        <motion.main
          className="max-w-4xl lg:max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid gap-6 sm:gap-8">
            {biographyContent.map((section, index) => (
              <motion.section
                key={section.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Timeline Line - Hidden on mobile, visible on larger screens */}
                <div className="hidden sm:block absolute left-6 sm:left-8 top-8 sm:top-12 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-blue-500" />

                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-violet-200/50 dark:border-violet-700/50 hover:shadow-2xl transition-all duration-300 group">
                  {/* Icon Circle - Responsive positioning and sizing */}
                  <div className="absolute -left-2 sm:-left-4 top-4 sm:top-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-white dark:border-gray-800 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {section.icon}
                    </div>
                  </div>

                  <div className="ml-8 sm:ml-12">
                    <motion.h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {section.title}
                    </motion.h3>

                    <motion.p
                      className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {section.content}
                    </motion.p>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-blue-500/10 dark:from-violet-500/20 dark:via-purple-500/20 dark:to-blue-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-violet-200/50 dark:border-violet-700/50 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Work Together?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                Let's turn your ideas into reality. I'm passionate about creating exceptional web experiences that make a difference.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </article>
  );
};

export default MyStory;