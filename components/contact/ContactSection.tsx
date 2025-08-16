"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Clock, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Form from './Form';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "parasharabhinav486@gmail.com",
      href: "mailto:parasharabhinav486@gmail.com",
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
      value: "Within 24-48 hrs",
      href: "#",
      description: "I'll get back to you quickly"
    }
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/AbhinavSharma486",
      label: "GitHub",
      hoverColor: "hover:bg-gray-800 dark:hover:bg-black"
    },
    {
      icon: LinkedinIcon,
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
      icon: MailIcon,
      href: "mailto:parasharabhinav486@gmail.com",
      label: "Email",
      hoverColor: "hover:bg-red-600 dark:hover:bg-red-500"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.08 + i * 0.07, duration: 0.7, type: 'spring' as const, bounce: 0.22 }
    })
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] py-8 sm:py-12 md:py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.22 }}
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 dark:text-white mb-3 sm:mb-4 drop-shadow-lg"
          >
            Get In Touch
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
            className="mx-auto mt-2 sm:mt-3 mb-4 sm:mb-6 h-1 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[480px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
            className="space-y-6 sm:space-y-8 order-1 xl:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                  animate="visible"
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative h-full"
                >
                  <div className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl group-hover:border-2 group-hover:border-violet-400 group-hover:shadow-[0_0_32px_0_rgba(124,58,237,0.18)] transition-all duration-300" />

                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 via-blue-500 to-fuchsia-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="text-sm sm:text-lg font-semibold text-blue-900 dark:text-white mb-1">
                            {info.title}
                          </h3>
                          <a
                            href={info.href}
                            className="text-xs sm:text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors duration-200 block break-all"
                          >
                            {info.value}
                          </a>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring', bounce: 0.22 }}
              className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-white mb-2">
                  Connect With Me
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Follow me on social media or reach out directly
                </p>
              </div>
              <div className="flex justify-center gap-3 sm:gap-4">
                {socialLinks.map(({ icon: Icon, href, label, hoverColor }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? "_blank" : undefined}
                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08, type: 'spring', bounce: 0.4 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-700 dark:bg-gray-800 text-white border border-gray-600/40 dark:border-gray-700/40 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400/60 active:scale-95 transition-all duration-300 ${hoverColor}`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                  <span>Team Collaboration</span>
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
                  <span>Problem Solving, Communication & Time Management</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
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