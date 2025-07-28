"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

import { ArrowRight, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import { motion } from 'framer-motion';

// Social links data;
const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    href: "https://github.com/AbhinavSharma486",
    label: "GitHub",
    hoverColor: "hover:bg-[0000]"
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/abhinav-sharma-6254252a5/",
    label: "LinkedIn",
    hoverColor: "hover:bg-[#0077b5]"
  },
  {
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send?phone=7819872024",
    label: "Whatsapp",
    hoverColor: "hover:bg-primary"
  },
  {
    icon: MailIcon,
    href: "/contact",
    label: "Email",
    hoverColor: "hover:bg-black"
  }
];

// Optimized Parallax hook with throttling
function useParallax(ref: React.RefObject<HTMLElement | null>) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  React.useEffect(() => {
    if (!ref.current) return;

    let ticking = false;
    const handle = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = ref.current!.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 1.5;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 1.5;
          setParallax({ x, y });
          ticking = false;
        });
        ticking = true;
      }
    };
    const reset = () => setParallax({ x: 0, y: 0 });
    const currentRef = ref.current;
    currentRef.addEventListener('mousemove', handle, { passive: true });
    currentRef.addEventListener('mouseleave', reset);
    return () => {
      currentRef.removeEventListener('mousemove', handle);
      currentRef.removeEventListener('mouseleave', reset);
    };
  }, [ref]);
  return parallax;
}

// Enhanced Background Blobs
const BackgroundBlobs = React.forwardRef<HTMLDivElement>((props, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, type: 'spring', bounce: 0.2 }}
    className="absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div className="absolute -inset-[10px] opacity-40 pointer-events-none">
      {[
        "top-1/4 left-1/4 bg-primary/10",
        "top-1/3 right-1/4 bg-violet-500/10 animation-delay-2000",
        "bottom-1/4 left-1/3 bg-blue-500/10 animation-delay-4000"
      ].map((className, index) => (
        <motion.div
          key={index}
          className={`absolute w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-lg animate-blob ${className}`}
          style={{ zIndex: 0 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.4, duration: 2, type: 'spring', bounce: 0.05 }}
        />
      ))}
    </div>
  </motion.div>
));

BackgroundBlobs.displayName = 'BackgroundBlobs';

// Optimized Profile Image with reduced parallax
const ProfileImage = ({ parallax }: { parallax: { x: number; y: number; }; }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.7 }}
    transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
    style={{
      transform: `translate3d(${parallax.x * 4}px, ${parallax.y * 4}px, 0)`
    }}
    className="relative group mx-auto w-full max-w-[10rem] xs:max-w-[6rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[14rem] 2xl:max-w-[16rem] mt-2 sm:mt-4 md:mt-6 lg:mt-0"
  >
    <motion.div
      className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-primary via-violet-500 to-blue-500 rounded-full opacity-80 group-hover:opacity-100 blur-lg transition duration-500 border border-violet-400 animate-gradient-x"
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(124,58,237,0.18)',
          '0 0 32px 8px rgba(124,58,237,0.18)',
          '0 0 0 0 rgba(124,58,237,0.18)'
        ]
      }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    />
    <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl border border-violet-300/60 dark:border-violet-700/60">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-violet-500/10 group-hover:opacity-0 transition duration-500" />
      <Image
        src="/assets/images/profile-img.webp"
        alt="Abhinav Sharma"
        width={256}
        height={256}
        className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
      />
    </div>
  </motion.div>
);

// Social links Component with tooltip and ripple
const SocialLinks = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.08 } },
    }}
    className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center"
  >
    {SOCIAL_LINKS.map(({ icon: Icon, href, label, hoverColor }, i) => (
      <motion.div
        key={label}
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 + i * 0.08, type: 'spring', bounce: 0.4 }}
        className="relative group"
      >
        <Link
          href={href}
          target={href.startsWith('http') ? "_blank" : undefined}
          rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-[#18181b] dark:bg-[#232136] text-white border border-violet-700/40 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400/60 active:scale-95 ${hoverColor}`}
          aria-label={label}
          tabIndex={0}
        >
          <Icon className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full pointer-events-none group-active:animate-ping bg-violet-400/20" />
        </Link>
      </motion.div>
    ))}
  </motion.div>
);

const Profile = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
    }
  }, []);
  const mainRef = useRef<HTMLDivElement>(null);
  const parallax = useParallax(mainRef);
  return (
    <main
      id="home"
      ref={mainRef}
      className='relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] flex items-center justify-center py-1 sm:py-2 md:py-4 lg:py-6 xl:py-8 2xl:py-10 overflow-x-hidden'>
      <BackgroundBlobs ref={mainRef} />
      <div className={`w-full max-w-7xl mx-auto px-1 xs:px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 ml-0 mr-0 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20 xl:ml-24 xl:mr-24`} style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        <article
          className='relative backdrop-blur-3xl bg-white/70 dark:bg-gray-900/60 rounded-lg sm:rounded-xl md:rounded-2xl border border-transparent hover:border-violet-400 dark:hover:border-violet-500 shadow-2xl transition-all duration-300 group w-full min-h-0 max-h-none md:min-h-[80vh] md:max-h-[95vh] flex flex-col'>
          {/* Floating badge - improved responsive positioning */}
          <motion.div
            className="absolute right-1 top-1 xs:right-2 xs:top-2 sm:right-3 sm:top-3 md:right-4 md:top-4 lg:right-6 lg:top-6 xl:right-10 xl:top-10 left-auto -translate-x-0 z-20 bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 text-white rounded-full px-1.5 py-0.5 xs:px-2 xs:py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg shadow-2xl font-bold flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2 border border-white dark:border-black/40 animate-bounce-slow max-w-[calc(100%-1rem)] min-w-fit profile-badge"
            initial={{ opacity: 0, y: -16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.7, type: 'spring', bounce: 0.4 }}
            style={{ zIndex: 20 }}
          >
            <motion.span
              className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-block"
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 1.4,
                ease: 'easeInOut',
              }}
              style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
            >
              👋
            </motion.span>
            <span className="inline">Open to Work</span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 p-1 xs:p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 2xl:p-10 md:pt-10 lg:pt-14 xl:pt-18 flex-1 min-h-0 profile-container" style={{ maxWidth: '100%' }}>
            <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 flex flex-col items-center justify-center">
              <ProfileImage parallax={parallax} />
              <div className="mt-4" />
              <SocialLinks />
              <div className="mt-4" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
              className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 text-center md:text-left flex flex-col justify-center"
            >
              <header className='space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4'>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, type: 'spring', bounce: 0.22 }}
                  className="font-orbitron font-bold text-xl sm:text-base md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl drop-shadow-md"
                >
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                    जय श्री राधे, I am
                  </span>
                </motion.div>
                <div className="mt-4" />
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.1, type: 'spring', bounce: 0.22 }}
                  className='font-orbitron font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl drop-shadow-lg'
                >
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                    Abhinav Sharma
                  </span>
                </motion.h1>
                <div className="mt-4" />
              </header>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.18, type: 'spring', bounce: 0.22 }}
                className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-black dark:text-white leading-relaxed profile-text mb-4"
              >
                MERN Stack Developer with hands-on experience in building scalable web applications, real-time systems,
                and robust authentication solutions.
                Transforming ideas into interactive and dynamic web experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.25, type: 'spring', bounce: 0.22 }}
                className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground text-xs xs:text-sm sm:text-base mb-4 text-black dark:text-white"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Looking for Full Stack MERN opportunities
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.32, type: 'spring', bounce: 0.22 }}
                className="flex flex-col sm:flex-row flex-wrap gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 justify-center items-center pt-2 xs:pt-2.5 sm:pt-3 md:pt-4"
              >
                <Button className="mb-4 group w-full sm:w-auto min-w-[100px] sm:min-w-[120px] md:min-w-[140px] relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-800 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/20 hover:border-white/40 backdrop-blur-sm button-glow rounded-full"
                  onClick={() => window.open("https://drive.google.com/file/d/1oJmaMKTolJIHsBHMWRLpUC2KWQ8EhTTO/view?usp=sharing", "_blank", "noopener,noreferrer")}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="mb-4 group relative overflow-hidden w-full sm:w-auto min-w-[100px] sm:min-w-[120px] md:min-w-[140px] bg-black hover:text-black text-white text-sm sm:text-base shadow-lg hover:shadow-xl hover:border-violet-400 dark:hover:border-violet-500 border border-violet-700/60 transition-all duration-300 rounded-full"
                >
                  <Link href="/my-story" className="flex items-center justify-center gap-2">
                    More About Me
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Profile;