'use client';

import { useState } from 'react';
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

import Link from "next/link";
import { ExternalLink, GithubIcon, Code, Download } from 'lucide-react';
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
  type: 'personal' | 'internship' | 'freelance';
  seeMore?: SeeMore;
  techs: string[];
  headerLinks?: {
    github?: HeaderLink;
  };
  reverse?: boolean;
  linesOfCode?: string;
  sizeOnGitHub?: string;
}

export default function Item({
  name,
  headerImg,
  description,
  type,
  seeMore,
  techs,
  headerLinks,
  linesOfCode,
  sizeOnGitHub,
}: ItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-full h-full p-[3px] rounded-xl sm:rounded-2xl lg:rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? `linear-gradient(to right, #8b5cf6, #3b82f6, #d946ef, #06b6d4, #8b5cf6)`
          : 'transparent',
        transition: 'background 0.3s ease'
      }}
    >
      <div
        className={`absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          background: 'linear-gradient(to right, #8b5cf6, #3b82f6, #d946ef, #06b6d4, #8b5cf6)',
          animation: 'none'
        }}
      />

      <Card className="relative flex flex-col w-full max-w-7xl mx-auto h-full bg-white/85 dark:bg-gray-900/85 backdrop-blur-2xl border border-white/30 dark:border-gray-700/40 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl transition-all duration-700 overflow-hidden z-10">

        <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl">
          {headerImg ? (
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/5] md:aspect-[16/6] lg:aspect-[16/7]">
              <Image
                className="object-cover w-full h-full transition-all duration-700"
                src={headerImg}
                alt={name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                quality={85}
                priority={false}
              />
            </div>
          ) : (
            <div className="w-full aspect-[16/10] sm:aspect-[16/5] md:aspect-[16/6] lg:aspect-[16/7] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <div className="text-gray-500 dark:text-gray-400 text-lg font-medium">No Image Available</div>
            </div>
          )}

          <motion.div
            className="absolute top-3 right-3 z-20"
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge
              className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm ${type === 'personal'
                ? 'bg-green-500/90 text-white border border-green-400/50'
                : type === 'internship'
                  ? 'bg-blue-500/90 text-white border border-blue-400/50'
                  : 'bg-purple-500/90 text-white border border-purple-400/50'
                }`}
            >
              {type === 'personal' ? 'Personal' : type === 'internship' ? 'Internship' : 'Freelance'}
            </Badge>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 min-w-0">

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-200 group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:via-blue-500 group-hover:to-fuchsia-500 dark:group-hover:from-violet-400 dark:group-hover:via-blue-400 dark:group-hover:to-fuchsia-400 transition-all duration-700 leading-tight tracking-tight"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {name}
          </motion.h2>

          <motion.div
            className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-500 break-words max-w-none"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-2 sm:space-y-2.5">
              {description.split('. ').filter(point => point.trim().length > 0).map((point, index) => {
                const colors = [
                  'text-violet-500',
                  'text-blue-500',
                  'text-green-500',
                  'text-pink-500',
                  'text-orange-500',
                  'text-purple-500',
                  'text-cyan-500',
                  'text-emerald-500'
                ];
                const bulletColor = colors[(index * 3) % colors.length];

                return (
                  <div key={index} className="flex items-start text-xs sm:text-sm md:text-base lg:text-lg">
                    <span className={`${bulletColor} text-sm sm:text-base md:text-lg lg:text-xl font-bold mr-2 sm:mr-3 flex-shrink-0 mt-0.5 leading-none`}>•</span>
                    <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 leading-relaxed flex-1">
                      {point.trim()}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
                  delay: 0.4 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-violet-100 via-blue-50 to-fuchsia-100 dark:from-violet-900/40 dark:via-blue-900/40 dark:to-fuchsia-900/40 text-violet-800 dark:text-violet-200 border border-violet-200/60 dark:border-violet-700/60 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium hover:from-violet-200 hover:via-blue-100 hover:to-fuchsia-200 dark:hover:from-violet-800/60 dark:hover:via-blue-800/60 dark:hover:to-fuchsia-800/60 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-lg hover:shadow-violet-200/30 dark:hover:shadow-violet-900/30 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {tech}
                </Badge>
              </motion.span>
            ))}
          </motion.div>

          {(linesOfCode || sizeOnGitHub) && (
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 md:gap-4"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {linesOfCode && (
                <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium flex items-center gap-1 sm:gap-1.5">
                  <Code className="h-3 w-3" />
                  {linesOfCode} lines
                </Badge>
              )}
              {sizeOnGitHub && (
                <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium flex items-center gap-1 sm:gap-1.5">
                  <Download className="h-3 w-3" />
                  {sizeOnGitHub}
                </Badge>
              )}
            </motion.div>
          )}

          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-2"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {headerLinks && headerLinks.github && (
              <motion.span whileHover={{ scale: 1.02 }} className="inline-block">
                <Link
                  target={headerLinks.github.target || "_blank"}
                  href={headerLinks.github.url || "#"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm font-semibold group/link ring-2 ring-transparent hover:ring-gray-300/30 dark:hover:ring-gray-400/30"
                >
                  <GithubIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">GitHub Repository</span>
                  <span className="sm:hidden">GitHub</span>
                </Link>
              </motion.span>
            )}

            {seeMore && (
              <motion.span whileHover={{ scale: 1.02 }} className="inline-block">
                <Link
                  target={seeMore.target || "_blank"}
                  href={seeMore.url || "#"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-white bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500 hover:from-violet-400 hover:via-blue-400 hover:to-fuchsia-400 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm font-semibold group/link ring-2 ring-transparent hover:ring-violet-300/30 dark:hover:ring-violet-400/30"
                >
                  {seeMore.text}
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </motion.span>
            )}
          </motion.div>
        </div>
      </Card>
    </div>
  );
}