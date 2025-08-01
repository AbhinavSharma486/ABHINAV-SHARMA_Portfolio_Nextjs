"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

const TimelineItem: React.FC<ExperienceItem & { idx: number; }> = (props) => {
  const isLeft = props.idx % 2 === 0;
  return (
    <div className="relative flex w-full justify-between items-center mb-16 min-h-[100px] md:mb-24 md:min-h-[140px]">
      {/* Left card (desktop) */}
      <div className={`hidden md:flex w-5/12 ${isLeft ? "justify-end" : ""}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(124,58,237,0.18)" }}
            className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border-2 border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-2xl shadow-xl p-8 transition-all duration-300 group max-w-[95vw]"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💼</span>
              <span className="font-bold text-xl text-blue-900 dark:text-white">{props.role}</span>
            </div>
            <div className="font-semibold text-violet-700 dark:text-violet-300 mb-1">{props.company}</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm mb-2">{props.duration}</div>
            <div className="mt-2 text-gray-600 dark:text-gray-200 text-base">{props.description}</div>
          </motion.div>
        )}
      </div>
      {/* Dot (desktop: sticky center, mobile: flex column left) */}
      <motion.div
        className={
          "z-20 " +
          "md:flex flex-col items-center sticky top-24 md:top-40 " +
          "hidden md:block"
        }
        initial={{ scale: 0.7, opacity: 0.5 }}
        whileInView={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="w-5 h-5 bg-gradient-to-br from-violet-500 via-blue-500 to-fuchsia-400 rounded-full ring-4 ring-white dark:ring-gray-900 flex items-center justify-center shadow-lg animate-pulse group-hover:animate-none" />
      </motion.div>
      {/* Right card (desktop) */}
      <div className={`hidden md:flex w-5/12 ${!isLeft ? "justify-start" : ""}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(124,58,237,0.18)" }}
            className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border-2 border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-2xl shadow-xl p-8 transition-all duration-300 group max-w-[95vw]"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💼</span>
              <span className="font-bold text-xl text-blue-900 dark:text-white">{props.role}</span>
            </div>
            <div className="font-semibold text-violet-700 dark:text-violet-300 mb-1">{props.company}</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm mb-2">{props.duration}</div>
            <div className="mt-2 text-gray-600 dark:text-gray-200 text-base">{props.description}</div>
          </motion.div>
        )}
      </div>
      {/* Mobile: dot/line left, card right, flex-row */}
      <div className="w-full flex md:hidden flex-row items-start min-h-[90px]">
        {/* Dot/line column */}
        <div className="w-12 flex flex-col items-center pt-6">
          <motion.div
            initial={{ scale: 0.7, opacity: 0.5 }}
            whileInView={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="w-5 h-5 bg-gradient-to-br from-violet-500 via-blue-500 to-fuchsia-400 rounded-full ring-4 ring-white dark:ring-gray-900 flex items-center justify-center shadow-lg animate-pulse group-hover:animate-none" />
          </motion.div>
        </div>
        {/* Card column */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(124,58,237,0.18)" }}
          className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-2 border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-2xl shadow-xl p-5 flex-1 ml-2 group mt-6 min-h-[90px]"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">💼</span>
            <span className="font-bold text-lg text-blue-900 dark:text-white">{props.role}</span>
          </div>
          <div className="font-semibold text-violet-700 dark:text-violet-300 mb-1 text-base">{props.company}</div>
          <div className="text-gray-700 dark:text-gray-300 text-xs mb-2">{props.duration}</div>
          <div className="mt-2 text-gray-600 dark:text-gray-200 text-sm">{props.description}</div>
        </motion.div>
      </div>
    </div>
  );
};

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const updateHeight = () => {
        const scrollHeight = ref.current?.scrollHeight || 0;
        const clientHeight = ref.current?.clientHeight || 0;
        // Use the actual content height, but cap it to prevent overflow
        setHeight(Math.min(scrollHeight, clientHeight * 2));
      };

      updateHeight();

      // Update height on window resize
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [ref, experiences.length]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 10%", "end 60%"] });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="experience" className="py-8 min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] relative overflow-hidden">
      {/* Animated Starry Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Ultra-Optimized Twinkling Stars */}
        {[...Array(15)].map((_, i) => {
          const random = Math.random();
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white/50 dark:bg-yellow-200/50 rounded-full"
              animate={{
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 6 + random * 3,
                repeat: Infinity,
                delay: random * 12,
                ease: "easeInOut"
              }}
              style={{
                left: `${random * 100}%`,
                top: `${random * 100}%`,
                filter: "blur(0.2px)"
              }}
            />
          );
        })}

        {/* Ultra-Optimized Larger Twinkling Stars */}
        {[...Array(6)].map((_, i) => {
          const random = Math.random();
          return (
            <motion.div
              key={`big-star-${i}`}
              className="absolute w-1.5 h-1.5 bg-yellow-300/40 dark:bg-yellow-100/40 rounded-full"
              animate={{
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: 8 + random * 4,
                repeat: Infinity,
                delay: random * 15,
                ease: "easeInOut"
              }}
              style={{
                left: `${random * 100}%`,
                top: `${random * 100}%`,
                filter: "blur(0.3px)"
              }}
            />
          );
        })}

        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/5 dark:to-yellow-200/5 pointer-events-none" />
      </div>

      <div className="container mx-auto px-2 md:px-10 lg:px-20 xl:px-32 relative z-10">
        <h1 className="font-orbitron text-center font-bold dark:text-white text-3xl md:text-5xl mt-4 text-blue-950 mb-2 md:mb-4 drop-shadow-lg">Experience</h1>
        <div className="mx-auto mt-3 mb-8 md:mb-12 h-1 w-full max-w-[340px] md:max-w-[480px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400" />
        <div className="relative flex flex-col items-center overflow-hidden" ref={ref}>
          {/* Animated vertical line - with proper constraints */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              maxHeight: `${height}px`
            }}
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-gradient-to-b from-violet-500 via-blue-500 to-fuchsia-400 dark:from-violet-400 dark:via-blue-400 dark:to-fuchsia-400 z-10 md:-translate-x-1/2 rounded-full shadow-[0_0_32px_8px_rgba(124,58,237,0.18)]"
          />
          {/* Timeline items */}
          {experiences.map((experience, idx) => (
            <TimelineItem key={idx} {...experience} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline; 