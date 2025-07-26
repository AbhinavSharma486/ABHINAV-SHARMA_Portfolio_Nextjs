"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import Form from './Form';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abhinavsharma486@gmail.com",
      href: "mailto:abhinavsharma486@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7819872024",
      href: "tel:+917819872024",
      description: "Call me for urgent matters"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Delhi, India",
      href: "#",
      description: "Available for remote work"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      href: "#",
      description: "I'll get back to you quickly"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.08 + i * 0.07, duration: 0.7, type: 'spring', bounce: 0.22 }
    })
  };

  return (
    <section className="bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] py-8 sm:py-12 md:py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.22 }}
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 dark:text-white mb-3 sm:mb-4 drop-shadow-lg"
          >
            Get In Touch
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
            className="mx-auto mt-2 sm:mt-3 mb-4 sm:mb-6 h-1 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[480px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring', bounce: 0.22 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
            className="space-y-6 sm:space-y-8 order-1 xl:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.22 }}
              className="text-center xl:text-left"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-3 sm:mb-4">
                Let's Connect
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
                I'm always open to discussing new opportunities, interesting projects, and creative ideas.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative"
                >
                  <div className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl group-hover:border-2 group-hover:border-violet-400 group-hover:shadow-[0_0_32px_0_rgba(124,58,237,0.18)] transition-all duration-300" />

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 via-blue-500 to-fuchsia-400 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-violet-500/25 transition-all duration-300">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-lg font-semibold text-blue-900 dark:text-white mb-1">
                          {info.title}
                        </h3>
                        <a
                          href={info.href}
                          className="text-xs sm:text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors duration-200 block break-all"
                        >
                          {info.value}
                        </a>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.4, type: 'spring', bounce: 0.22 }}
              className="bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-fuchsia-400/10 dark:from-violet-500/20 dark:via-blue-500/20 dark:to-fuchsia-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-violet-200/50 dark:border-violet-700/50"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 dark:text-violet-400" />
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-white">
                  Why Work With Me?
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Quick response time and clear communication</span>
                </li>
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span>Modern tech stack and best practices</span>
                </li>
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-fuchsia-500 rounded-full flex-shrink-0"></span>
                  <span>Scalable and maintainable code solutions</span>
                </li>
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Ongoing support and collaboration</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
            className="flex items-center justify-center order-2 xl:order-2"
          >
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 