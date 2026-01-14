"use client";

import React, { useRef, useMemo, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/AbhinavSharma486",
    label: "GitHub",
    hoverColor: "hover:bg-gray-800 dark:hover:bg-black"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abhinav-sharma-mern/",
    label: "LinkedIn",
    hoverColor: "hover:bg-blue-600 dark:hover:bg-blue-500"
  },
  {
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send?phone=7819872024",
    label: "WhatsApp",
    hoverColor: "hover:bg-green-600 dark:hover:bg-green-500"
  },
  {
    icon: Mail,
    href: "/contact",
    label: "Email",
    hoverColor: "hover:bg-red-600 dark:hover:bg-red-500"
  }
];

function useParallax(ref: React.RefObject<HTMLElement | null>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useTransform(mouseX, [-300, 300], [-10, 10]);
  const y = useTransform(mouseY, [-300, 300], [-10, 10]);

  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  // Create separate motion values for mobile
  const mobileX = useMotionValue(0);
  const mobileY = useMotionValue(0);

  React.useEffect(() => {
    const element = ref.current;
    if (!element || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, mouseX, mouseY, isMobile]);

  // Return motion values based on mobile state
  return {
    x: isMobile ? mobileX : springX,
    y: isMobile ? mobileY : springY
  };
}

const BackgroundBlobs = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const blobPositions = useMemo(() => [
    { x: '10%', y: '20%', size: 'w-32 h-32' },
    { x: '80%', y: '10%', size: 'w-24 h-24' },
    { x: '20%', y: '80%', size: 'w-28 h-28' },
    { x: '70%', y: '70%', size: 'w-20 h-20' },
  ], []);

  // Don't render blobs on mobile for better performance
  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      {...props}
    >
      <div className="relative w-full h-full">
        {blobPositions.map((blob, index) => (
          <motion.div
            key={index}
            className={`absolute ${blob.size} bg-gradient-to-r from-violet-500/20 to-purple-500/20 dark:from-violet-400/10 dark:to-purple-400/10 rounded-full blur-2xl`}
            style={{ left: blob.x, top: blob.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.2 + index * 0.1,
              duration: 1.5,
              type: 'spring',
              bounce: 0.1
            }}
          />
        ))}
      </div>
    </motion.div>
  );
});
BackgroundBlobs.displayName = 'BackgroundBlobs';

const ProfileImage = ({ parallax }: { parallax: { x: MotionValue<number>; y: MotionValue<number>; }; }) => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
      style={{
        transform: isMobile ? 'none' : `translate3d(${parallax.x}px, ${parallax.y}px, 0)`
      }}
      className="relative group mx-auto w-full max-w-[8rem] xs:max-w-[9rem] sm:max-w-[10rem] md:max-w-[11rem] lg:max-w-[12rem] xl:max-w-[13rem] 2xl:max-w-[14rem] mt-4 sm:mt-6 md:mt-8 lg:mt-10"
    >
      <motion.div
        className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 dark:from-violet-500 dark:via-purple-500 dark:to-blue-500 rounded-full opacity-90 dark:opacity-90 group-hover:opacity-100 blur-lg transition duration-500 border border-violet-500/60 dark:border-violet-400"
        animate={isMobile ? {} : {
          boxShadow: [
            '0 0 0 0 rgba(124,58,237,0.25)',
            '0 0 32px 8px rgba(124,58,237,0.25)',
            '0 0 0 0 rgba(124,58,237,0.25)'
          ]
        }}
        transition={isMobile ? {} : { repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl border-2 border-violet-500/80 dark:border-violet-700/60">
        <Image
          src="/assets/images/profileimg.webp"
          alt="Abhinav Sharma"
          width={256}
          height={256}
          className="object-cover w-full h-full"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZ..."
        />
      </div>
    </motion.div>
  );
};

const SocialLinks = () => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: isMobile ? 0.02 : 0.08 } },
      }}
      className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center"
    >
      {SOCIAL_LINKS.map(({ icon: Icon, href, label, hoverColor }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.2 : 0.5, delay: 0.1 + i * (isMobile ? 0.02 : 0.08), type: 'spring', bounce: 0.4 }}
          className="relative group"
        >
          <a
            href={href}
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400/60 active:scale-95 transition-all duration-300 bg-gray-700 dark:bg-gray-800 border border-gray-600/40 dark:border-gray-700/40 ${hoverColor}`}
          >
            <Icon className="w-5 h-5 text-white transition-transform duration-300" />
            <span className="absolute inset-0 rounded-full pointer-events-none group-active:animate-ping bg-violet-400/20" />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Profile = () => {
  const [showAllPoints, setShowAllPoints] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.overflowX = 'hidden';
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';

      const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tablet + Mobile
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const mainRef = useRef<HTMLDivElement>(null);
  const parallax = useParallax(mainRef);

  const bulletPoints = [
    "MERN Stack Developer with 5 months of internship experience, skilled in building secure, scalable, and responsive web applications using React, Next.js, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, and JavaScript.",
    "Worked on real-time and dynamic projects like Chatify (chat app), SyncDocs (collaborative editor), a cybersecurity platform, an Event Management System, and Aniicon’s Cafe, leveraging modern MERN stack technologies.",
  ];

  const pointsToShow = !isMobile ? bulletPoints : (showAllPoints ? bulletPoints : bulletPoints.slice(0, 1));

  return (
    <main
      id="home"
      ref={mainRef}
      className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] flex items-center justify-center py-6 sm:py-1 md:py-4 lg:py-6 xl:py-8 2xl:py-10"
    >
      <BackgroundBlobs ref={mainRef} />

      <div className={`w-full max-w-7xl mx-auto 
        px-4 sm:px-4 md:px-4 lg:px-8 xl:px-12 2xl:px-16 
        ml-2 mr-2 sm:ml-3 sm:mr-3 md:ml-4 md:mr-4 lg:ml-20 lg:mr-20 xl:ml-24 xl:mr-24`}
        style={{ maxWidth: '100vw' }}
      >

        <article
          className='relative backdrop-blur-3xl bg-white/70 dark:bg-gray-900/60 rounded-2xl sm:rounded-lg md:rounded-2xl lg:rounded-2xl border border-transparent hover:border-2 hover:border-violet-400 dark:hover:border-violet-500 shadow-2xl transition-all duration-300 group w-full h-full flex flex-col overflow-hidden'>
          {/* Floating badge - improved responsive positioning */}
          <motion.div
            className="absolute right-0 top-0 xs:right-0.5 xs:top-0.5 sm:right-1 sm:top-1 md:right-2 md:top-2 lg:right-3 lg:top-3 xl:right-4 xl:top-4 left-auto -translate-x-0 z-20 bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 text-white rounded-full px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 text-xs xs:text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg shadow-2xl font-bold flex items-center gap-1.5 xs:gap-2 sm:gap-1.5 md:gap-2 border border-white dark:border-black/40 animate-bounce-slow max-w-[calc(100%-1rem)] min-w-fit profile-badge"
            initial={{ opacity: 0, y: -16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: isMobile ? 0.3 : 1.1, duration: isMobile ? 0.3 : 0.7, type: 'spring', bounce: 0.4 }}
            style={{ zIndex: 20 }}
          >
            <motion.span
              className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-block"
              animate={isMobile ? {} : { rotate: [0, 20, -10, 20, 0] }}
              transition={isMobile ? {} : {
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
          <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 p-4 sm:p-1 xs:p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10 md:pt-10 lg:pt-14 xl:pt-18 flex-1 min-h-0 profile-container overflow-hidden" style={{ maxWidth: '100%' }}>
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
              <ProfileImage parallax={parallax} />
              <SocialLinks />
              <div className="h-1 sm:h-2 md:h-3 lg:h-4"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.8, type: 'spring', bounce: 0.22 }}
              className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 text-center md:text-left flex flex-col justify-center"
            >
              <header className='space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4'>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobile ? 0.2 : 0.7, type: 'spring', bounce: 0.22 }}
                  className="font-orbitron font-bold text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-4xl drop-shadow-md"
                >
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                    जय श्री राधे, I am
                  </span>
                </motion.div>
                <div className="mt-4" />
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobile ? 0.2 : 0.7, delay: 0.1, type: 'spring', bounce: 0.22 }}
                  className='font-orbitron font-bold text-3xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl 2xl:text-5xl drop-shadow-lg'
                >
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                    Abhinav Sharma
                  </span>
                </motion.h1>
                <div className="mt-4" />
              </header>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.2 : 0.7, delay: 0.18, type: 'spring', bounce: 0.22 }}
                className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-black dark:text-white leading-relaxed profile-text mb-4"
              >
                <div className="space-y-2 sm:space-y-2.5 px-4 sm:px-0 md:px-0">
                  {pointsToShow.map((point, index) => {
                    const colors = [
                      'text-violet-500',
                      'text-blue-500',
                      'text-green-500',
                      'text-pink-500'
                    ];
                    const bulletColor = colors[index % colors.length];

                    return (
                      <div key={index} className="flex items-start">
                        <span className={`${bulletColor} text-sm sm:text-base md:text-lg lg:text-xl font-bold mr-2 sm:mr-3 flex-shrink-0 mt-0.5 leading-none`}>•</span>
                        <span className="text-[14px] xs:text-sm sm:text-md md:text-md lg:text-lg text-black dark:text-white leading-relaxed flex-1">
                          {point}
                        </span>
                      </div>
                    );
                  })}
                  {/* Mobile-only Read More/Read Less button */}
                  {isMobile && (
                    <div>
                      <button
                        onClick={() => setShowAllPoints(!showAllPoints)}
                        className="text-violet-500 hover:text-violet-600 font-medium text-sm underline mt-2 transition-colors duration-200"
                      >
                        {showAllPoints ? 'Read Less' : 'Read More'}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.2 : 0.7, delay: 0.32, type: 'spring', bounce: 0.22 }}
                className="flex flex-col sm:flex-row flex-wrap gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 justify-center items-center pt-2 xs:pt-2.5 sm:pt-3 md:pt-4"
              >
                <Button className="mb-4 group w-Content sm:w-auto min-w-[100px] sm:min-w-[120px] md:min-w-[140px] relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-800 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 active:scale-95 border border-white/20 hover:border-white/40 backdrop-blur-sm button-glow rounded-full"
                  onClick={() => window.open("https://drive.google.com/file/d/1ywIFDKNN8ZhkqBv3YH8-lgpsBMJ-_sMC/view?usp=sharing", "_blank", "noopener,noreferrer")}
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
                  className="mb-4 group relative overflow-hidden w-Content sm:w-auto min-w-[100px] sm:min-w-[120px] md:min-w-[140px] hover:bg-black bg-black hover:text-white text-white text-sm sm:text-base shadow-lg hover:shadow-xl hover:border-violet-400 dark:hover:border-violet-500 border border-violet-700/60 transition-all duration-300 rounded-full"
                >
                  <Link href="/my-story" className="flex items-center justify-center gap-2">
                    More About Me
                    <ExternalLink className="group-hover:translate-x-1 transition-transform" />
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