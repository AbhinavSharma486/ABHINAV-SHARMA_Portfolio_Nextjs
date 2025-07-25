"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import ShimmerButton from './ui/shimmer-button';
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
    hoverColor: "hover:bg-[#333]"
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
    hoverColor: "hover:bg-primary"
  }
];

// Parallax/floating effect hook
function useParallax(ref) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  React.useEffect(() => {
    if (!ref.current) return;
    const handle = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setParallax({ x, y });
    };
    const reset = () => setParallax({ x: 0, y: 0 });
    ref.current.addEventListener('mousemove', handle);
    ref.current.addEventListener('mouseleave', reset);
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', handle);
        ref.current.removeEventListener('mouseleave', reset);
      }
    };
  }, [ref]);
  return parallax;
}

// Enhanced Background Blobs
const BackgroundBlobs = React.forwardRef((props, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, type: 'spring', bounce: 0.2 }}
    className="absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div className="absolute -inset-[10px] opacity-100 pointer-events-none">
      {[
        "top-1/4 left-1/4 bg-primary/20",
        "top-1/3 right-1/4 bg-violet-500/20 animation-delay-2000",
        "bottom-1/4 left-1/3 bg-blue-500/20 animation-delay-4000"
      ].map((className, index) => (
        <motion.div
          key={index}
          className={`absolute w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob ${className}`}
          style={{ zIndex: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.2, duration: 1.1, type: 'spring', bounce: 0.2 }}
        />
      ))}
    </div>
  </motion.div>
));

// Enhanced Profile Image with floating badge and parallax
const ProfileImage = ({ parallax }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.92 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.7 }}
    transition={{ duration: 0.8, type: 'spring', bounce: 0.25 }}
    style={{
      transform: `translate3d(${parallax.x * 12}px, ${parallax.y * 12}px, 0)`
    }}
    className="relative group mx-auto w-full max-w-[12rem] md:max-w-[16rem] mt-14 md:mt-0"
  >
    <motion.div
      className="absolute -inset-1 bg-gradient-to-r from-primary via-violet-500 to-blue-500 rounded-full opacity-80 group-hover:opacity-100 blur-lg transition duration-500 border-2 border-violet-400 animate-gradient-x"
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(124,58,237,0.18)',
          '0 0 32px 8px rgba(124,58,237,0.18)',
          '0 0 0 0 rgba(124,58,237,0.18)'
        ]
      }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    />
    <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl border-2 border-violet-300/60 dark:border-violet-700/60">
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
    className="flex flex-wrap gap-3 justify-center"
  >
    {SOCIAL_LINKS.map(({ icon: Icon, href, label, hoverColor }, i) => (
      <motion.div
        key={label}
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 + i * 0.08, type: 'spring', bounce: 0.4 }}
        className=""
      >
        <div className="relative group">
          <Link
            href={href}
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
            className={`flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-background dark:bg-background/80 text-foreground transition-all duration-300 ${hoverColor} hover:text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400/60 active:scale-95`}
            aria-label={label}
            tabIndex={0}
          >
            <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full pointer-events-none group-active:animate-ping bg-violet-400/20" />
          </Link>
          {/* Tooltip */}
          <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 scale-0 group-hover:scale-100 group-focus:scale-100 bg-gray-900 text-white text-xs rounded px-2 py-1 shadow-lg transition-transform duration-200 z-20 whitespace-nowrap">
            {label}
          </span>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const Profile = () => {
  const mainRef = useRef(null);
  const parallax = useParallax(mainRef);
  return (
    <main ref={mainRef} className='relative min-h-[90vh] bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] flex items-center justify-center py-8 md:py-10 overflow-hidden'>
      <BackgroundBlobs ref={mainRef} />
      <div className={`container mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32`}>
        <motion.article
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, type: 'spring', bounce: 0.22 }}
          className='relative backdrop-blur-2xl bg-white/70 dark:bg-gray-900/60 rounded-2xl border border-transparent hover:border-violet-400 dark:hover:border-violet-500 shadow-2xl overflow-hidden transition-all duration-300 group max-w-5xl mx-auto'
        >
          {/* Floating badge - responsive position and size */}
          <motion.div
            className="absolute right-4 top-4 left-auto -translate-x-0 z-20 bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 text-white rounded-full px-3 py-1.5 text-sm md:text-base md:px-4 md:py-2 shadow-2xl font-bold flex items-center gap-2 border-2 border-white dark:border-black/40 drop-shadow-lg animate-bounce-slow md:right-6 md:top-6 md:mt-4 md:left-auto md:translate-x-0 md:right-10 md:top-10"
            initial={{ opacity: 0, y: -16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.7, type: 'spring', bounce: 0.4 }}
            style={{ zIndex: 20 }}
          >
            <motion.span
              className="text-xl md:text-2xl inline-block"
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
            </motion.span> Open to Work
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8 md:gap-12 p-6 sm:p-8 md:p-10 lg:p-14 md:pt-24">
            <div className="space-y-8 md:space-y-12 flex flex-col items-center">
              <ProfileImage parallax={parallax} />
              <SocialLinks />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
              className="space-y-8 md:space-y-12 text-center md:text-left"
            >
              <header className='space-y-4 md:space-y-8'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, type: 'spring', bounce: 0.22 }}
                  className="font-orbitron text-xl sm:text-2xl md:text-3xl drop-shadow-md"
                >
                  <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    जय श्री राधे, I am
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.1, type: 'spring', bounce: 0.22 }}
                  className='font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg'
                >
                  <span className="bg-gradient-to-r from-primary via-violet-500 to-blue-500 bg-clip-text text-transparent">
                    Abhinav Sharma
                  </span>
                </motion.h1>
              </header>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.18, type: 'spring', bounce: 0.22 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                MERN Stack Developer with hands-on experience in building scalable web applications, real-time systems,
                and robust authentication solutions.
                Transforming ideas into interactive and dynamic web experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.25, type: 'spring', bounce: 0.22 }}
                className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground text-sm sm:text-base"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Looking for Full Stack MERN opportunities
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.32, type: 'spring', bounce: 0.22 }}
                className="flex flex-wrap gap-4 justify-center items-center pt-3 md:pt-4"
              >
                <ShimmerButton
                  className="min-w-[120px] sm:min-w-[140px] text-white dark:text-white shadow-lg hover:shadow-xl hover:border-violet-400 dark:hover:border-violet-500 transition-all duration-300"
                  onClick={() => window.open("https://drive.google.com/file/d/1oJmaMKTolJIHsBHMWRLpUC2KWQ8EhTTO/view?usp=sharing", "_blank", "noopener,noreferrer")}
                >
                  Download Resume
                </ShimmerButton>
                <Button
                  variant="outline"
                  asChild
                  className="group relative overflow-hidden min-w-[120px] sm:min-w-[140px] bg-background/80 hover:bg-background dark:hover:text-primary shadow-lg hover:shadow-xl hover:border-violet-400 dark:hover:border-violet-500 transition-all duration-300"
                >
                  <Link href="/my-story" className="flex dark:text-white items-center justify-center gap-2">
                    More About Me
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </main>
  );
};

export default Profile;