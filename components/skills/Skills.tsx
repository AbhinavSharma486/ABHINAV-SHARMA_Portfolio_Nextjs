'use client';

import React from 'react';
import { skillsData } from "../../utils/data/skills";
import { skillsImage } from "../../utils/skill-image";
import Image from "next/image";
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.03 * i, duration: 0.38, ease: 'easeOut' }
  })
};

const Skills = () => {
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
              {skillsData.map((skill, id) => (
                <motion.div
                  key={id}
                  custom={id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col items-center justify-center transition-all duration-700 ease-out rounded-2xl group relative hover:scale-[1.08] cursor-pointer shadow-lg hover:shadow-2xl will-change-transform will-change-opacity"
                  whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(124,58,237,0.18)" }}
                  transition={{ type: 'tween', duration: 0.32, ease: 'easeOut' }}
                >
                  <div className="h-full w-full rounded-2xl border border-transparent bg-[#18181b]/80 backdrop-blur-lg group-hover:border-violet-400 group-hover:border-violet-500 transition-all duration-700 ease-out shadow-md group-hover:shadow-violet-200 group-hover:shadow-violet-900/30 will-change-transform will-change-opacity">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 p-4 sm:p-5">
                      <div className="h-8 sm:h-9 md:h-10 lg:h-12">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={44}
                          height={44}
                          className="h-full w-auto rounded-lg drop-shadow-md"
                        />
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
        </div>
      </div>
    </section>
  );
};

export default Skills;