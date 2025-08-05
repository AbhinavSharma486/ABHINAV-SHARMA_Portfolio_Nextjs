'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { skillsData } from "../../utils/data/skills";
import { skillsImage } from "../../utils/skill-image";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Code2, ChevronDown, ChevronUp } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.01 * i, duration: 0.25, ease: 'easeOut' as const }
  })
};

const Skills = () => {
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(8);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Memoize skills with their images for better performance
  const skillsWithImages = useMemo(() => {
    return skillsData
      .filter(skill => skill && skill.trim()) // Filter out empty or invalid skills
      .map(skill => {
        const image = skillsImage(skill);

        return {
          name: skill,
          image: image
        };
      });
  }, []);

  // Determine how many skills to show based on screen size
  // On mobile: use visibleSkillsCount, on larger screens: show all skills
  const skillsToShow = isMobile
    ? skillsWithImages.slice(0, visibleSkillsCount)
    : skillsWithImages;

  // Check if there are more skills to show (only on mobile)
  const hasMoreSkills = isMobile && visibleSkillsCount < skillsWithImages.length;

  // Handle show more button click
  const handleShowMore = () => {
    const newCount = Math.min(visibleSkillsCount + 8, skillsWithImages.length);
    setVisibleSkillsCount(newCount);
  };

  // Handle show less button click
  const handleShowLess = () => {
    setVisibleSkillsCount(8);
    // Scroll to the top of the skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id='skills' className="bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] py-12 md:py-16">
      <div className={`container mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32`}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
          className={`font-orbitron text-center font-bold dark:text-white text-4xl sm:text-5xl mt-4 text-blue-950 drop-shadow-lg`}
        >
          Experties
        </motion.h1>
        <div className="mx-auto mt-3 mb-8 h-1 w-full max-w-[340px] md:max-w-[480px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400" />

        <div className="relative z-50 border-t border-gray-300 dark:border-gray-700 my-2 lg:my-2">
          <div className="w-full my-4 flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 sm:gap-5 md:gap-6">
              {skillsToShow.map(({ name: skill, image }, id) => (
                <motion.div
                  key={id}
                  custom={id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col items-center justify-center transition-all duration-200 ease-out rounded-2xl group relative hover:scale-[1.03] cursor-pointer shadow-lg hover:shadow-lg"
                  whileHover={{ scale: 1.03, boxShadow: "0 2px 12px 0 rgba(124,58,237,0.12)" }}
                  transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${skill} skill`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      // Add any interaction logic here
                    }
                  }}
                >
                  <div className="h-full w-full rounded-2xl border border-transparent bg-[#18181b]/80 backdrop-blur-lg group-hover:border-violet-500 transition-all duration-200 ease-out shadow-md group-hover:shadow-violet-900/30">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 p-4 sm:p-5">
                      <div className="h-8 sm:h-9 md:h-10 lg:h-12">
                        {image ? (
                          <div className="h-full w-full flex items-center justify-center">
                            <Image
                              src={image}
                              alt={skill}
                              width={44}
                              height={44}
                              className="h-full w-auto rounded-lg drop-shadow-md"
                              style={{
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                              }}
                            />
                          </div>
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 rounded-lg">
                            <Code2 className="h-5 w-5 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-white text-xs sm:text-sm md:text-base text-center font-semibold">
                        {skill}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Show More/Show Less button - only visible on mobile */}
          {isMobile && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8">
              {hasMoreSkills && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShowMore}
                  className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ease-out hover:from-violet-600 hover:to-blue-600 text-sm sm:text-base w-fit sm:w-auto min-w-[160px] sm:min-w-[180px] object-contain"
                >
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 object-contain flex-shrink-0" />
                  <span className="whitespace-nowrap object-contain">Show More Skills</span>
                </motion.button>
              )}

              {visibleSkillsCount > 8 && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShowLess}
                  className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ease-out hover:from-gray-600 hover:to-gray-700 text-sm sm:text-base w-fit sm:w-auto min-w-[160px] sm:min-w-[180px] object-contain"
                >
                  <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 object-contain flex-shrink-0" />
                  <span className="whitespace-nowrap object-contain">Show Less</span>
                </motion.button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;