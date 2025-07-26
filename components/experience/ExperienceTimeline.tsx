"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { cn } from "../../lib/utils";

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
            className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-2xl shadow-xl p-8 transition-all duration-300 group overflow-hidden max-w-[95vw]"
          >
            <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:border-2 group-hover:border-violet-400 group-hover:shadow-[0_0_32px_0_rgba(124,58,237,0.18)] transition-all duration-300" />
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
            className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-2xl shadow-xl p-8 transition-all duration-300 group overflow-hidden max-w-[95vw]"
          >
            <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:border-2 group-hover:border-violet-400 group-hover:shadow-[0_0_32px_0_rgba(124,58,237,0.18)] transition-all duration-300" />
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
          className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-2xl shadow-xl p-5 flex-1 ml-2 group overflow-hidden mt-6 min-h-[90px]"
        >
          <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:border-2 group-hover:border-violet-400 group-hover:shadow-[0_0_32px_0_rgba(124,58,237,0.18)] transition-all duration-300" />
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
      setHeight(ref.current.scrollHeight);
    }
  }, [ref, experiences.length]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 10%", "end 60%"] });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="experience" className="py-8 min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a]">
      <div className="container mx-auto px-2 md:px-10 lg:px-20 xl:px-32">
        <h1 className="font-orbitron text-center font-bold dark:text-white text-3xl md:text-5xl mt-4 text-blue-950 mb-2 md:mb-4 drop-shadow-lg">Experience</h1>
        <div className="mx-auto mt-3 mb-8 md:mb-12 h-1 w-full max-w-[340px] md:max-w-[480px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400" />
        <div className="relative flex flex-col items-center" ref={ref}>
          {/* Animated vertical line */}
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-gradient-to-b from-violet-500 via-blue-500 to-fuchsia-400 dark:from-violet-400 dark:via-blue-400 dark:to-fuchsia-400 z-10 -translate-x-0 md:-translate-x-1/2 rounded-full shadow-[0_0_32px_8px_rgba(124,58,237,0.18)]"
          />
          <div className="w-full flex flex-col gap-y-10 md:gap-y-0">
            {experiences.map((exp, idx) => (
              <TimelineItem key={idx} idx={idx} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline; 