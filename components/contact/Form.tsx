"use client";

import React, { useState } from "react";
import Notification from "@/utils/Notification";
import {
  validateEmail,
  validateTextarea,
} from "../../helpers";
import emailjs from "@emailjs/browser";
import ProgressBar from "../ui/LoadingBar";
import { Send, User, Mail, MessageSquare, FileText } from "lucide-react";
import Alert from "../ui/Alert";
import { motion } from "framer-motion";

const notyf = new Notification(3000);

const Form = () => {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    success: "",
    error: "",
  });
  const [invalidInput, setInvalidInput] = useState({
    name: false,
    subject: false,
    email: false,
    message: false,
  });
  const [userInput, setUserInputs] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  function inputHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setInvalidInput({
      name: false,
      subject: false,
      email: false,
      message: false,
    });
    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function onSubmitEmailHandler(event: React.FormEvent): Promise<void> {
    event.preventDefault();

    const valideEmail = validateEmail(userInput.email);
    const { name, subject, email, message } = userInput;

    if (name.length <= 2) {
      setInvalidInput((prev) => ({ ...prev, name: true }));
      return notyf.error("Your name shouldn't be less than 2 characters");
    }

    if (subject.length <= 2) {
      setInvalidInput((prev) => ({ ...prev, subject: true }));
      return notyf.error("Subject shouldn't be less than 2 characters");
    }

    if (!valideEmail.valid) {
      setInvalidInput((prev) => ({ ...prev, email: true }));
      return notyf.error(valideEmail.message);
    }

    if (!validateTextarea("message", 5, 1000)) {
      setInvalidInput((prev) => ({ ...prev, message: true }));
      return;
    }

    const templateParams = {
      user_name: name.trim(),
      to_name: "Abhinav Sharma",
      from_name: name.trim(),
      from_subject: subject.trim(),
      from_email: email.trim(),
      reply_to: email.trim(),
      message: message.trim(),
    };

    setLoading(true);

    try {
      await emailjs.send(
        "service_ggnu69n",
        "template_ifd66zh",
        templateParams,
        "FwICwjumTnvkxF5CO"
      );
      notyf.success("Message sent successfully!");

      setUserInputs({
        name: "",
        subject: "",
        email: "",
        message: "",
      });

      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setMessage({
        success: "",
        error: "Internal server error, technical issues!",
      });
      setLoading(false);
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.1)" },
    blur: { scale: 1, boxShadow: "0 0 0 0 rgba(124, 58, 237, 0)" }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
      className="w-full max-w-sm sm:max-w-md mx-auto"
    >
      <div className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300 group overflow-hidden">
        <div className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl group-hover:border-2 group-hover:border-violet-400 group-hover:shadow-[0_0_32px_0_rgba(124,58,237,0.18)] transition-all duration-300" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.22 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 via-blue-500 to-fuchsia-400 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
              <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white mb-2">
              Send Message
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Fill out the form below and I'll get back to you soon
            </p>
          </motion.div>

          {isLoading && <ProgressBar />}
          {message.success && <Alert message={message.success} type="success" />}
          {message.error && <Alert message={message.error} type="error" />}

          <form onSubmit={onSubmitEmailHandler} className="space-y-4 sm:space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring', bounce: 0.22 }}
            >
              <label
                className={`${invalidInput.name
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-700 dark:text-gray-200"
                  } block text-sm font-semibold mb-2 flex items-center gap-2`}
                htmlFor="username"
              >
                <User className="w-4 h-4" />
                Full Name
              </label>
              <motion.input
                autoComplete="name"
                name="name"
                value={userInput.name}
                onChange={inputHandler}
                className={`${invalidInput.name
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 dark:border-gray-600 focus:border-violet-500 focus:ring-violet-500/20"
                  } appearance-none block w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base leading-tight focus:outline-none focus:ring-4 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500`}
                id="username"
                type="text"
                placeholder="Enter your full name"
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.22 }}
            >
              <label
                className={`${invalidInput.email
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-700 dark:text-gray-200"
                  } block text-sm font-semibold mb-2 flex items-center gap-2`}
                htmlFor="email"
              >
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <motion.input
                autoComplete="email"
                className={`${invalidInput.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 dark:border-gray-600 focus:border-violet-500 focus:ring-violet-500/20"
                  } appearance-none block w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base leading-tight focus:outline-none focus:ring-4 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500`}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={inputHandler}
                value={userInput.email}
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.22 }}
            >
              <label
                className={`${invalidInput.subject
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-700 dark:text-gray-200"
                  } block text-sm font-semibold mb-2 flex items-center gap-2`}
                htmlFor="subject"
              >
                <FileText className="w-4 h-4" />
                Subject
              </label>
              <motion.input
                value={userInput.subject}
                onChange={inputHandler}
                className={`${invalidInput.subject
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 dark:border-gray-600 focus:border-violet-500 focus:ring-violet-500/20"
                  } appearance-none block w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base leading-tight focus:outline-none focus:ring-4 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500`}
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: 0.4, type: 'spring', bounce: 0.22 }}
            >
              <label
                className={`${invalidInput.message
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-700 dark:text-gray-200"
                  } block text-sm font-semibold mb-2 flex items-center gap-2`}
                htmlFor="message"
              >
                <MessageSquare className="w-4 h-4" />
                Message
              </label>
              <motion.textarea
                rows={4}
                className={`${invalidInput.message
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 dark:border-gray-600 focus:border-violet-500 focus:ring-violet-500/20"
                  } appearance-none block w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base leading-tight focus:outline-none focus:ring-4 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 resize-none`}
                id="message"
                placeholder="Tell me about your project..."
                name="message"
                onChange={inputHandler}
                value={userInput.message}
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            {/* Send Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: 0.5, type: 'spring', bounce: 0.22 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400 hover:from-violet-600 hover:via-blue-600 hover:to-fuchsia-500 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group text-sm sm:text-base"
            >
              <span>{isLoading ? "Sending..." : "Send Message"}</span>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Form;