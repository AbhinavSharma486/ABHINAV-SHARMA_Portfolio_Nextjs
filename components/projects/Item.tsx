'use client';

import { useState } from 'react';
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { ExternalLink, GithubIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";
import React from 'react';



interface HeaderLink {
  url?: string;
  icon?: React.ReactNode;
  target?: string;
}

interface SeeMore {
  before?: string;
  after?: string;
  url?: string;
  text?: string;
  target?: string;
}

interface ItemProps {
  name: string;
  description: string;
  headerImg: string;
  seeMore?: SeeMore;
  techs: string[];
  headerLinks?: {
    github?: HeaderLink;
  };
  reverse?: boolean;
}

export default function Item({
  name,
  headerImg,
  description,
  seeMore,
  techs,
  headerLinks,
}: ItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative overflow-hidden transition-all duration-500 h-full">
      <Card className="relative flex flex-col w-full max-w-7xl mx-auto min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[520px] bg-white/85 dark:bg-gray-900/85 backdrop-blur-2xl border border-white/30 dark:border-gray-700/40 rounded-3xl shadow-2xl hover:border-violet-400/60 dark:hover:border-violet-500/60 hover:shadow-violet-200/40 dark:hover:shadow-violet-900/40 transition-all duration-700 group overflow-hidden">

        {/* Enhanced gradient border overlay on hover */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/15 via-blue-500/15 to-fuchsia-500/15 blur-lg" />
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-r from-violet-400/20 via-blue-400/20 to-fuchsia-400/20" />
        </div>

        {/* Top Section: Image + Content */}
        <div className="flex flex-col sm:flex-row w-full flex-grow min-h-0">

          {/* Image Section */}
          <div className="w-full sm:w-2/5 lg:w-[38%] flex-shrink-0 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
            <div
              className="relative w-full aspect-[16/10] sm:aspect-[4/3] max-h-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 group-hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-[1.02] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
                src={headerImg}
                alt={name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 38vw"
                quality={85}
                priority={false}
              />

              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* GitHub button overlay */}
              <div className={`absolute inset-0 flex items-center justify-center z-20 bg-black/10 backdrop-blur-sm transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                {headerLinks && headerLinks.github && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-violet-600 via-blue-600 to-fuchsia-600 hover:from-violet-500 hover:via-blue-500 hover:to-fuchsia-500 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 px-4 py-2.5 rounded-xl font-semibold"
                    >
                      <Link
                        target={headerLinks.github.target || "_blank"}
                        href={headerLinks.github.url || "#"}
                        className="flex items-center gap-2.5"
                      >
                        <GithubIcon className="h-4 w-4" />
                        View Source
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 space-y-4 lg:space-y-6 min-w-0">
            <div className="space-y-3 lg:space-y-4">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-200 group-hover:from-violet-600 group-hover:via-blue-600 group-hover:to-fuchsia-600 transition-all duration-700 leading-tight tracking-tight"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {name}
              </motion.h2>

              <motion.p
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-500 break-words max-w-none"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {description}
              </motion.p>
            </div>

            {/* CTA Button */}
            {seeMore && (
              <motion.div
                className="pt-2 lg:pt-4"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.span whileHover={{ scale: 1.02 }} className="inline-block">
                  <Link
                    target={seeMore.target || "_blank"}
                    href={seeMore.url || "#"}
                    className="inline-flex items-center gap-2.5 text-white bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500 hover:from-violet-400 hover:via-blue-400 hover:to-fuchsia-400 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 lg:px-7 lg:py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold group/link ring-2 ring-transparent hover:ring-violet-300/30 dark:hover:ring-violet-400/30"
                  >
                    {seeMore.text}
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </motion.span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          className="w-full border-t border-gray-200/60 dark:border-gray-700/60 bg-gradient-to-r from-gray-50/50 via-white/30 to-gray-50/50 dark:from-gray-800/50 dark:via-gray-900/30 dark:to-gray-800/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
            {techs.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-violet-100 via-blue-50 to-fuchsia-100 dark:from-violet-900/40 dark:via-blue-900/40 dark:to-fuchsia-900/40 text-violet-800 dark:text-violet-200 border border-violet-200/60 dark:border-violet-700/60 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 text-xs sm:text-sm md:text-base font-medium hover:from-violet-200 hover:via-blue-100 hover:to-fuchsia-200 dark:hover:from-violet-800/60 dark:hover:via-blue-800/60 dark:hover:to-fuchsia-800/60 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-lg hover:shadow-violet-200/30 dark:hover:shadow-violet-900/30 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {tech}
                </Badge>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Card>
    </div>
  );
}