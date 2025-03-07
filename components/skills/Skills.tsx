'use client';

import { skillsData } from "../../utils/data/skills";
import { skillsImage } from "../../utils/skill-image";
import Image from "next/image";


const Skills = () => {

  return (
    <>
      <section id='skills' className="p-10 dark:bg-gray-900">
        <div className={`container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}>
          <h1
            className={`font-orbitron text-center font-bold  dark:text-white text-5xl mt-4 text-blue-950`}
          >
            Experties
          </h1>

          <div className="relative z-50 border-t border-gray-300 dark:border-gray-700 my-2 lg:my-2">

            <div className="w-full my-4 flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6">
                {
                  skillsData.map((skill, id) => (
                    <div
                      key={id}
                      className="w-36 h-fit flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                    >
                      <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 transition-all duration-500">
                        <div className="flex -translate-y-[1px] justify-center">
                          <div className="w-3/4">
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-3 p-6">
                          <div className="h-8 sm:h-10">
                            <Image
                              src={skillsImage(skill)?.src}
                              alt={skill}
                              width={40}
                              height={40}
                              className="h-full w-auto rounded-lg"
                            />
                          </div>
                          <p className="text-white text-sm sm:text-lg">
                            {skill}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;