'use client';

import { BsGithub } from "react-icons/bs";
import Item from "./Item";
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import React from 'react';


// Ultra-optimized background blobs with minimal parallax
const ProjectBlobs = ({ y1, y2, y3 }: { y1: MotionValue<number>; y2: MotionValue<number>; y3: MotionValue<number>; }) => (
  <div className="absolute inset-0 overflow-hidden z-0 hidden sm:block pointer-events-none" aria-hidden="true">
    <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-400/10 rounded-full blur-xl animate-blob" />
    <motion.div style={{ y: y2 }} className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-blob" />
    <motion.div style={{ y: y3 }} className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-fuchsia-400/10 rounded-full blur-xl animate-blob" />
  </div>
);

const Projects = () => {
  const sectionRef = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [selectedType, setSelectedType] = useState<'all' | 'personal' | 'internship'>('all');

  // Ultra-optimized parallax effect for blobs
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-25, 50]);

  const projects = [
    {
      key: "chatify",
      name: "Chatify",
      type: "personal" as const,
      headerImg: "/assets/images/chatifyHomePage.webp",
      description: "💬 Real-time full-stack chat app built with the MERN stack featuring Socket.IO for instant messaging, typing indicators, and online user tracking. 🔐 Robust authentication system with JWT, email verification, password reset, and Google OAuth (Firebase integration). 🖼️ Media support including image and video sharing via Cloudinary with message reactions, editing, deletion, and replies. 🎨 Customizable UI using Tailwind CSS + DaisyUI, offering light/dark themes, font scaling, and mobile responsiveness. ⚙️ Scalable architecture with Redux Toolkit & Persist, modular backend (Express), and secure real-time communication.",
      seeMore: { url: "https://chatify-4x1c.onrender.com/", text: "Visit the website...", target: "_blank" },
      techs: ["reactjs", "daisyui", "tailwindcss", "vitejs", "expressjs", "nodejs", "mongodb", "cloudinary", "socket.io", "firebase", "axios", "javascript", "bcryptjs", "jsonwebtoken", "nodemailer", "cors", "dotenv", "socket.io", "framer-motion", "react-icons", "react-redux", "redux-persist", "lucide-react", "reduxjs-toolkit", "cookie-parser", "react-datepicker", "react-easy-crop", "socket.io-client", "react-hot-toast"],
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/Advance_Chat_App",
          icon: <BsGithub />,
          target: "_blank"
        },
      },
      linesOfCode: "14,318",
      sizeOnGitHub: "9.8 MB",
    },
    {
      key: "ten-sentinel",
      name: "Ten Sentinel",
      type: "internship" as const,
      headerImg: "/assets/images/tenSentinelHomePage.webp",
      description: "🔐 Built a cybersecurity platform offering cloud security, VAPT, ISO 27001 certification, and phishing simulations using React, Tailwind CSS, and Framer Motion for modern UI. 📱 Developed a responsive multi - page web app with 19 + service pages, mobile menu, dropdowns, and scroll - to - top functionality for smooth navigation. 🧩 Integrated features like blog system, newsletter subscription, testimonial carousel, animated counters, and secure contact forms. ⚙️ Used Vite, React Router, ESLint, and modular architecture to ensure performance, scalability, and clean code structure. 🎓 Completed as an internship project at The Entrepreneurship Network Pvt.Ltd., delivering real - world cybersecurity services and client - ready UI.",
      seeMore: { url: "https://ten-sentinel-lilac.vercel.app/", text: "Visit the website...", target: "_blank" },
      techs: [
        "reactjs", "Aceternity UI", "tailwindcss", "vitejs", "javascript", "bootstrap", "react-icons", "clsx", "swiper", "framer-motion", "react-countup", "@biomejs/biome", "@heroicons/react", "react-icons", "react-slick", "slick-carousel", "tailwind-merge", "tailwind-scrollbar", "tailwindcss-animate", "lucide-react", "react-hot-toast", "react-transition-group", "react-intersection-observer"],
      headerLinks: {
        github: {
          url: "https://github.com/yogita0914/Ten_Sentinel",
          icon: <BsGithub />,
          target: "_blank"
        },
      },
      linesOfCode: "8,742",
      sizeOnGitHub: "6.2 MB",
    },
    {
      key: "syncdocs",
      name: "Sync Docs",
      type: "personal" as const,
      headerImg: "/assets/images/syncDocsHomePage.webp",
      description: "🔧 Built Sync Docs using Next.js, Liveblocks, and Lexical for real-time editing.Added live cursors, auto-save, and Clerk-based auth with role-based access. 📝 Integrated Lexical editor with text formatting, inline title editing, toolbar, shortcuts, and @mentions to streamline collaboration. 👥 Enabled creating, deleting, and sharing docs.Managed roles in real - time and ensured document owners couldn’t be removed. 🔔 Added notifications for invites, mentions, and replies.Showed active users with color - coded avatars and supported comment threads. 🎨 Designed responsive UI with Tailwind CSS, Radix UI, and shadcn / ui.Styled with dark mode and deployed securely on Vercel.",
      seeMore: { url: "https://sync-docs-next-js.vercel.app/sign-in", text: "Give it a try..." },
      techs: ["nextjs", "typescript", "tailwindcss", "clerk", "lexical", "liveblocks", "nanoid", "typescript", "clsx", "dotenv", "redix-ui", "jsm-editor", "lucide-react", "@liveblocks/react", "@clerk/nextjs", "@clerk/themes", "@lexical/react", "@liveblocks/client", "@liveblocks/node", "@liveblocks/react-ui", "@liveblocks/react-lexical", "@radix-ui/react-dialog", "@radix-ui/react-label", "@radix-ui/react-popover", "@radix-ui/react-select", "@radix-ui/react-slot"],
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/SyncDocsNextJS",
          icon: <BsGithub />,
        },
      },
      linesOfCode: "9,876",
      sizeOnGitHub: "7.2 MB",
    },
    {
      key: "aniicone's-cafe",
      name: "Aniicone's Cafe",
      type: "internship" as const,
      headerImg: "",
      description: "🍽️ Modern café ordering system with a mobile-first UI, allowing customers to browse a categorized menu, place orders, and view real-time summaries.  🛠️ Admin dashboard for real-time order tracking, status updates, and order filtering by date, customer, or item. 🧾 Automated PDF billing with café branding, order breakdown, timestamps, and tax-inclusive totals—downloadable or printable.  🔐 Secure authentication system for both customers and admins using JWT/session management. ⚙️ Fully responsive full-stack app built with clean code architecture, RESTful backend, and environment-based config handling.",
      techs: ["reactjs", "tailwindcss", "vitejs", "javascript", "bootstrap", "expressjs", "nodejs", "mongodb", "cloudinary", "firebase", "axios", "bcryptjs", "jsonwebtoken", "cors", "dotenv", "lucide-react", "react-icons", "redux-toolkit", "cookie-parser", "cookie-parser", "react-datepicker", "framer-motion", "react-redux", "redux-persist", "react-easy-crop", "react-hot-toast"],

      linesOfCode: "8,742",
      sizeOnGitHub: "6.2 MB",
    },
    {
      key: "crypto-harbor",
      name: "Crypto Harbor",
      type: "personal" as const,
      headerImg: "/assets/images/crypto-harbor.webp",
      description: "🚀 Developed a modern, responsive cryptocurrency tracking web app using React.js, Chakra UI, and Framer Motion for dynamic UI. 📊 Integrated CoinGecko API to display live crypto prices, market stats, exchange data, and interactive charts using Chart.js. 💱 Implemented multi-currency support (INR/USD/EUR) with real-time updates and timeframe-based analysis (24h to 365d, max). 🌗 Added floating dark/light theme toggle, smooth animations, and professional loaders for seamless user experience. 🧩 Designed reusable components including CoinCards, analytics dashboard, exchange listings, and detailed coin pages",
      seeMore: { url: "https://crypto-harbor.vercel.app/", text: "View Project..." },
      techs: [
        "reactjs", "typescript", "nodejs", "mongodb", "tailwindcss", "expressjs", "axios", "socket.io", "chart.js", "@emotion/react", "@emotion/styled", "framer-motion", "react-icons", "@chakra-ui/react", "@testing-library/react", "@testing-library/user-event", "@testing-library/jest-dom", "react-chartjs-2"],
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/Crypto-Harbor_using_react",
          icon: <BsGithub />,
        },
      },
      linesOfCode: "13,245",
      sizeOnGitHub: "9.1 MB",
    },
    {
      key: "event-flow",
      name: "Event Flow",
      type: "internship" as const,
      headerImg: "/assets/images/eventFlowHomePage.webp",
      description: "🗓️ Full-featured event platform built with the MERN stack, allowing users to create, manage, and attend events with calendar and analytics support.  🔐 JWT-based authentication system with protected routes, user roles, and secure cookie/session handling.  🧾 Cloudinary integration for seamless event image uploads and visual branding in the UI.  📊 Admin dashboard with attendee management, event status tracking, and data visualization via Recharts.  🌙 Modern, responsive UI with dark mode, built using Tailwind CSS, Redux Toolkit, and Framer Motion for smooth UX.",
      seeMore: { url: "https://eventflow-km9l.onrender.com/", text: "Visit the website...", target: "_blank" },
      techs: ["reactjs", "tailwindcss", "vitejs", "lucide-react", "javascript", "bootstrap", "axios", "bcryptjs", "cloudinary", "compression", "cors", "dotenv", "express", "jsonwebtoken", "mongoose", "morgan", "validator", "date-fns", "node-cron", "framer-motion", "react-icons", "@reduxjs/toolkit", "react-datepicker", "react-helmet", "react-redux", "react-toastify", "redux-persist", "@tanstack/react-query", "cookie-parser", "express-rate-limit", "react-hot-toast",],
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/Event_Management_System_IBI_Internship_Project",
          icon: <BsGithub />,
          target: "_blank"
        },
      },
      linesOfCode: "18,567",
      sizeOnGitHub: "12.3 MB",
    }
  ];

  // Filter projects based on selected type
  const filteredProjects = projects.filter(project =>
    selectedType === 'all' || project.type === selectedType
  );

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 4, filteredProjects.length));
  };

  const handleShowLess = () => {
    setVisibleProjects(4);
  };

  // Reset visible projects when filter changes
  React.useEffect(() => {
    setVisibleProjects(4);
  }, [selectedType]);

  const hasMoreProjects = visibleProjects < filteredProjects.length;
  const showLessButton = visibleProjects > 4;

  return (
    <section id="projects" ref={sectionRef} className="pt-16 sm:pt-20 bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] relative overflow-hidden">
      <ProjectBlobs y1={y1} y2={y2} y3={y3} />
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20`}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
          className={`font-orbitron text-center font-bold dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-2 my-4 text-blue-950 drop-shadow-lg`}
        >
          Notable Projects
        </motion.h1>
        <div className="mx-auto mt-3 mb-6 sm:mb-8 h-1 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[480px] lg:max-w-[600px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400" />

        {/* Filter Toggle Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2"
        >
          <motion.button
            onClick={() => setSelectedType('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${selectedType === 'all'
              ? 'bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400 text-white shadow-lg'
              : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
          >
            All Projects
          </motion.button>
          <motion.button
            onClick={() => setSelectedType('personal')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${selectedType === 'personal'
              ? 'bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400 text-white shadow-lg'
              : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
          >
            Personal Projects
          </motion.button>
          <motion.button
            onClick={() => setSelectedType('internship')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${selectedType === 'internship'
              ? 'bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400 text-white shadow-lg'
              : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
          >
            Internship Projects
          </motion.button>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:gap-6 grid-cols-1 lg:grid-cols-2 w-full mx-auto mb-8 sm:mb-12">
          {filteredProjects.slice(0, visibleProjects).map((project, i) => {
            const { key, ...itemProps } = project;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 + i * 0.08,
                  type: 'spring',
                  bounce: 0.15
                }}
              >
                <Item key={key} {...itemProps} reverse={i % 2 === 1} />
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
            className="flex justify-center mt-8 sm:mt-12 mb-6 sm:mb-8"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(124, 58, 237, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400 hover:from-violet-600 hover:via-blue-600 hover:to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 border-2 border-transparent hover:border-violet-300 dark:hover:border-violet-400 backdrop-blur-sm text-sm sm:text-base"
            >
              Load More Projects
            </motion.button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showLessButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
            className="flex justify-center mt-6 sm:mt-8 mb-6 sm:mb-8"
          >
            <motion.button
              onClick={handleShowLess}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(107, 114, 128, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 border-2 border-transparent hover:border-gray-400 dark:hover:border-gray-300 backdrop-blur-sm text-sm sm:text-base"
            >
              Show Less
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;