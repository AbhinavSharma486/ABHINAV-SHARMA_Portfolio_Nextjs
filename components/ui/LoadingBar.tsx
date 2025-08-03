"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingBar = () => {
  return (
    <motion.div
      className="flex z-0 items-center text-center justify-center rounded-lg bg-transparent dark:border-gray-700"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div role="status">
        <motion.svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <motion.path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
        <span className="sr-only">Loading...</span>
      </div>
    </motion.div>
  );
};

// Enhanced Full page loading overlay component
export const FullPageLoading = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9998] bg-gradient-to-br from-white/95 via-white/90 to-violet-50/80 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-violet-900/20 backdrop-blur-md flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Enhanced Spinner Animation */}
          <div className="relative">
            {/* Main rotating spinner ring */}
            <motion.div
              className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ transform: 'translateZ(0)' }}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                {/* Inner spinning dots */}
                <div className="relative w-16 h-16">
                  {[0, 1, 2, 3].map((index) => (
                    <motion.div
                      key={index}
                      className={`absolute w-3 h-3 rounded-full ${index === 0 ? 'top-0 left-1/2 transform -translate-x-1/2 bg-violet-500' :
                          index === 1 ? 'top-1/2 right-0 transform -translate-y-1/2 bg-purple-500' :
                            index === 2 ? 'bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500' :
                              'top-1/2 left-0 transform -translate-y-1/2 bg-violet-600'
                        }`}
                      animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.25
                      }}
                      style={{ transform: 'translateZ(0)' }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Outer pulsing rings with different speeds */}
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 w-24 h-24 rounded-full border-2 ${index === 1 ? 'border-violet-400/30' :
                    index === 2 ? 'border-purple-400/20' :
                      'border-blue-400/15'
                  }`}
                animate={{
                  rotate: index % 2 === 0 ? 360 : -360,
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2 + index * 0.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ transform: 'translateZ(0)' }}
              />
            ))}

            {/* Floating spinner dots */}
            {[
              { pos: '-top-3 -right-3', size: 'w-4 h-4', colors: 'from-violet-500 to-purple-600', delay: 0 },
              { pos: '-bottom-3 -left-3', size: 'w-4 h-4', colors: 'from-blue-500 to-violet-600', delay: 0.3 },
              { pos: '-top-3 -left-3', size: 'w-3 h-3', colors: 'from-purple-500 to-blue-600', delay: 0.6 },
              { pos: '-bottom-3 -right-3', size: 'w-3 h-3', colors: 'from-violet-600 to-purple-500', delay: 0.9 }
            ].map((dot, index) => (
              <motion.div
                key={index}
                className={`absolute ${dot.pos} ${dot.size} bg-gradient-to-r ${dot.colors} rounded-full`}
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: dot.delay
                }}
                style={{ transform: 'translateZ(0)' }}
              />
            ))}
          </div>

          {/* Modern Loading Text with Spinner Effect */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Loading
            </motion.h3>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-violet-500' :
                      index === 1 ? 'bg-purple-500' :
                        index === 2 ? 'bg-blue-500' :
                          'bg-violet-600'
                    }`}
                  animate={{
                    y: [0, -6, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                  style={{ transform: 'translateZ(0)' }}
                />
              ))}
            </div>
          </motion.div>

          {/* Enhanced Progress Bar with Spinner Effect */}
          <motion.div
            className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Spinning progress indicator */}
            <motion.div
              className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ transform: 'translateZ(0)' }}
            />
          </motion.div>

          {/* Additional floating elements for enhanced visual appeal */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full opacity-60"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingBar;
