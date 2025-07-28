'use client';

import { BsGithub } from "react-icons/bs";
import Item from "./Item";
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useState } from 'react';



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
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Ultra-optimized parallax effect for blobs
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-25, 50]);

  const projects = [
    {
      key: "chatify",
      name: "Chatify",
      headerImg: "/assets/images/chatify-MERN.webp",
      description: "Developed a secure and customizable user platform with authentication, real-time chat, profile management, and database integration. Implemented secure login (email/password, Google) with OTP verification and JWT for enhanced security. Built a real-time chat system with online/offline status tracking using Socket.io. Enabled profile updates, including name changes, profile picture uploads (Cloudinary), and password resets. Provided 32 theme options for UI customization. Utilized MongoDB for data storage and Nodemailer for email verification and password recovery.",
      seeMore: { url: "https://chatify-4x1c.onrender.com/", text: "Visit the website...", target: "_blank" },
      techs: ["reactjs", "tailwindcss", "vitejs", "expressjs", "nodejs", "mongodb", "cloudinary", "socket.io", "react-hot-toast", "firebase", "axios", "lucide-react", "redux-toolkit", "javascript", "bcryptjs", "cookie-parser", "jsonwebtoken", "nodemailer"],
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/Advance_Chat_App",
          icon: <BsGithub />,
          target: "_blank"
        },
      },
    },
    {
      key: "syncdocs",
      name: "Sync Docs",
      headerImg: "/assets/images/Sync-docs-nextjs.webp",
      description: "Developed a real-time collaborative document editor using Liveblocks, enhancing team productivity and remote collaboration. Enabled multiple users to collaborate with role-based permissions  Can View and Can Write real-time edits, mentions, and threaded comments for discussion and issue resolution. Integrated Lexical for rich-text editing with advanced formatting options like headings, bold, italic, underline, and strikethrough. Built using Next.js and TypeScript, with Radix UI for accessible and modern UI components.",
      seeMore: { url: "https://sync-docs-next-js.vercel.app/sign-in", text: "Give it a try..." },
      techs: ["nextjs", "tailwindcss", "clerk", "lexical", "liveblocks", "redix-ui", "jsm-editor", "lucide-react", "nanoid", "typescript"],
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/SyncDocsNextJS",
          icon: <BsGithub />,
        },
      },
    },
    {
      key: "todo-redux",
      name: "Todo using Redux",
      headerImg: "/assets/images/todo-using-redux.webp",
      description: "I built a  To-Do application using Redux Toolkit.  This app features an input field where users can enter tasks. Upon hitting enter, the entered text becomes a to-do item displayed below the input field.  Each to-do item has a delete button for removal.  The application utilizes Redux to persist the to-do list, ensuring that tasks remain even after page refresh.",
      techs: ["reactjs", "reduxjs", "tailwindcss", "vitejs", "javascript"],
      seeMore: { url: "https://todo-using-reduxtoolkit.netlify.app/", text: "Give it a try..." },
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/Todo-using-ReduxToolkit",
          icon: <BsGithub />,
        },
      },
    },
    {
      key: "github-profile",
      name: "Github Profile Search",
      headerImg: "/assets/images/github-profile-search.webp",
      description: "GitHub Profile Search is a web application built using HTML, CSS, and JavaScript that allows users to search for any GitHub profile by entering a username. The application fetches and displays key profile details, including the user's avatar, username, full name, bio, followers, following count, and public repositories. It also includes a Check Profile button that redirects users to the corresponding GitHub profile.",
      techs: ["html", "css", "javascript"],
      seeMore: { url: "https://abhinavsharma486.github.io/Search_Github_Profile/", text: "Give it a try..." },
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/Search_Github_Profile",
          icon: <BsGithub />,
        },
      },
    },
    {
      key: "word-counter",
      name: "Word Counter",
      headerImg: "/assets/images/word-counter.webp",
      description: " Word Counter is a versatile text analysis tool that provides word, character, and sentence counts, along with an estimated reading time.  It also includes text transformation options (uppercase/lowercase) and a clear all function.  A dark/light mode toggle enhances usability. This project is ideal for quick text analysis and manipulation.",
      seeMore: { url: "https://word-counter-using-react-two.vercel.app/", text: "Give it a try..." },
      techs: ["reactjs", "css", "javascript"],
    },
    {
      key: "mycart",
      name: "My Cart",
      headerImg: "/assets/images/mycart.webp",
      description: "I developed  My Cart, a front-end focused project.  This project allowed me to gain expertise in implementing shopping cart functionality, including dynamically updating the cart's contents and total value as items are added or removed.",
      seeMore: {
        url: "https://my-cart-using-react.vercel.app/",
        text: "Checkout it",
      },
      techs: ["javascript", "reactjs", "redux", "sass", "react-hot-toast"],
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/my-cart-using-react",
          icon: <BsGithub />,
        },
      },
    },
    {
      key: "mystore",
      name: "MYSTORE",
      headerImg: "/assets/images/mystore.webp",
      description: "MyStore is a front-end website showcasing a variety of audio products, specializing in headphones.  The site is designed to highlight different product categories, including headphones, Bluetooth speakers, smartwatches, and wireless earbuds.  A dedicated  Popular Products section further curates a selection of trending items.  MyStore provides a visually appealing platform for browsing and discovering the latest audio technology.",
      seeMore: { url: "https://mystore-one-ecru.vercel.app/", text: "Explore the hub..." },
      techs: ["Material UI", "javascript", "reactjs", "sass"],
      headerLinks: {
        github: {
          url: "https://github.com/AbhinavSharma486/mystore",
          icon: <BsGithub />,
        },
      },
    },
    {
      key: "password-generator",
      name: "Password Generator",
      headerImg: "/assets/images/password-generator.webp",
      description: "I developed a Password Generator project that creates strong, customizable passwords.  Users can specify the desired password length and choose whether to include uppercase letters and numbers.  The password updates in real-time as the user adjusts these options, without the need for a submit button.",
      seeMore: {
        url: "https://password-generator-using-react.netlify.app/",
        text: "Checkout it",
      },
      techs: ["reactjs", "javascript", "css"],
    },
  ];

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  const handleShowLess = () => {
    setVisibleProjects(3);
  };

  const hasMoreProjects = visibleProjects < projects.length;
  const showLessButton = visibleProjects > 3;

  return (
    <section id="projects" ref={sectionRef} className="pt-20 bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] relative overflow-hidden">
      <ProjectBlobs y1={y1} y2={y2} y3={y3} />
      <div className={`relative z-10 container mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32`}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
          className={`font-orbitron text-center font-bold dark:text-white text-4xl sm:text-5xl pb-2 my-4 text-blue-950 drop-shadow-lg`}
        >
          Notable Projects
        </motion.h1>
        <div className="mx-auto mt-3 mb-8 h-1 w-full max-w-[340px] md:max-w-[480px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400" />
        <div className="grid gap-8 grid-cols-1 w-full mx-auto mb-12">
          {projects.slice(0, visibleProjects).map((project, i) => {
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
            className="flex justify-center mt-12 mb-8"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(124, 58, 237, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400 hover:from-violet-600 hover:via-blue-600 hover:to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 border-2 border-transparent hover:border-violet-300 dark:hover:border-violet-400 backdrop-blur-sm"
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
            className="flex justify-center mt-8 mb-8"
          >
            <motion.button
              onClick={handleShowLess}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(107, 114, 128, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 border-2 border-transparent hover:border-gray-400 dark:hover:border-gray-300 backdrop-blur-sm"
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