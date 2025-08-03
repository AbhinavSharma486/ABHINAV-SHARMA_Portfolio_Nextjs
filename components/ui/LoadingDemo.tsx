"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '@/context/loading-context';
import LoadingBar from './LoadingBar';

const LoadingDemo = () => {
  const { showLoading, hideLoading } = useLoading();

  const handleShowLoading = () => {
    showLoading();
    // Simulate loading for 3 seconds
    setTimeout(() => {
      hideLoading();
    }, 3000);
  };

  const handleShowLoadingWithDelay = () => {
    showLoading();
    // Simulate loading for 5 seconds
    setTimeout(() => {
      hideLoading();
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 dark:from-gray-900 dark:to-violet-900 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Enhanced Loading Animations
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience smooth, animated loading states with Framer Motion.
            Click the buttons below to see the enhanced loading animations in action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Demo 1: Small Loading Bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Small Loading Bar
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A compact loading indicator with smooth animations.
            </p>
            <div className="flex justify-center">
              <LoadingBar />
            </div>
          </motion.div>

          {/* Demo 2: Full Page Loading */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Full Page Loading
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Immersive full-screen loading experience with multiple animations.
            </p>
            <div className="space-y-3">
              <motion.button
                onClick={handleShowLoading}
                className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-violet-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Show Loading (3s)
              </motion.button>
              <motion.button
                onClick={handleShowLoadingWithDelay}
                className="w-full bg-gradient-to-r from-blue-500 to-violet-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Show Loading (5s)
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Animation Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Smooth Transitions",
                description: "Framer Motion powered animations with custom easing functions",
                icon: "🎯"
              },
              {
                title: "Multiple Effects",
                description: "Spinning rings, floating particles, and shimmer effects",
                icon: "✨"
              },
              {
                title: "Performance Optimized",
                description: "Hardware-accelerated animations with transform3d",
                icon: "⚡"
              },
              {
                title: "Responsive Design",
                description: "Adapts beautifully to all screen sizes and devices",
                icon: "📱"
              },
              {
                title: "Accessibility",
                description: "Screen reader friendly with proper ARIA labels",
                icon: "♿"
              },
              {
                title: "Dark Mode Support",
                description: "Seamless integration with light and dark themes",
                icon: "🌙"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-4 rounded-lg bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-700 dark:to-violet-900/20"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Usage Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-2xl p-6 border border-violet-200 dark:border-violet-800"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            How to Use
          </h3>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p>
              <strong>1. Import the hook:</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">import {`{ useLoading }`} from '@/context/loading-context'</code>
            </p>
            <p>
              <strong>2. Use in component:</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">const {`{ showLoading, hideLoading }`} = useLoading()</code>
            </p>
            <p>
              <strong>3. Show/hide loading:</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">showLoading()</code> and <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">hideLoading()</code>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingDemo; 