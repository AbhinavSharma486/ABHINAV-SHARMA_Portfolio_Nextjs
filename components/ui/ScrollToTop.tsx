"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    // Method 1: Direct scroll
    window.scrollTo(0, 0);

    // Method 2: Smooth scroll
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 10);

    // Method 3: Document element scroll
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 20);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, type: 'spring', bounce: 0.6 }}
          className="fixed bottom-6 right-6 z-50"
        >

          {/* Multiple glowing background layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400 rounded-2xl blur-xl opacity-60 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-blue-400 to-fuchsia-300 rounded-2xl blur-lg opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Orbital ring effect */}
          <motion.div
            className="absolute inset-0 border-2 border-violet-300/50 rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Main button */}
          <motion.button
            onClick={scrollToTop}
            className="relative bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400 hover:from-violet-600 hover:via-blue-600 hover:to-fuchsia-500 text-white p-4 rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(124,58,237,0.3)] transition-all duration-500 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-600 border border-white/20 backdrop-blur-sm cursor-pointer z-10"
            aria-label="Scroll to top"
            whileHover={{
              scale: 1.15,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-fuchsia-400/20 rounded-2xl animate-pulse pointer-events-none" />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Icon with enhanced styling */}
            <div className="relative z-20">
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronUp className="w-6 h-6 drop-shadow-lg" />
              </motion.div>
            </div>

            {/* Ripple effect on hover */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-2xl pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Inner glow effect */}
            <div className="absolute inset-1 bg-gradient-to-r from-violet-400/30 via-blue-400/30 to-fuchsia-300/30 rounded-xl pointer-events-none" />
          </motion.button>

          {/* Enhanced floating particles effect */}
          <motion.div
            className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              y: [0, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full shadow-lg"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, 5, 0]
            }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.9, 0.4],
              x: [0, -3, 0]
            }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 1 }}
          />

          {/* Energy waves effect */}
          <motion.div
            className="absolute inset-0 border border-violet-200/30 rounded-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 border border-blue-200/30 rounded-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />

          {/* Sparkle effects */}
          <motion.div
            className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-1 h-1 bg-white rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.7 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 