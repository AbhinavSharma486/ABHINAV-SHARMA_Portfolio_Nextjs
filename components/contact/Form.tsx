"use client";

import React, { useState, useEffect } from "react";
import Notification from "@/utils/Notification";
import { validateEmail } from "../../helpers";
import {
  validateName,
  validateMessage,
  sanitizeInput,
  generateCSRFToken,
  RateLimiter
} from "../../utils/security";
import emailjs from "@emailjs/browser";
import ProgressBar from "../ui/LoadingBar";
import { Send, User, Mail, MessageSquare, FileText, Shield } from "lucide-react";
import Alert from "../ui/Alert";
import { motion } from "framer-motion";
import AccessibleButton from "../ui/AccessibleButton";

const notyf = new Notification(3000);

const Form = () => {
  const [isLoading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const [rateLimiter] = useState(() => new RateLimiter(3, 60000)); // 3 attempts per minute
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

  // Generate CSRF token on component mount
  useEffect(() => {
    setCsrfToken(generateCSRFToken());
  }, []);

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

    // Rate limiting check
    const clientId = userInput.email || 'anonymous';
    if (!rateLimiter.isAllowed(clientId)) {
      const remainingTime = Math.ceil(rateLimiter.getRemainingTime(clientId) / 1000);
      notyf.error(`Too many attempts. Please wait ${remainingTime} seconds before trying again.`);
      return;
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeInput(userInput.name);
    const sanitizedEmail = sanitizeInput(userInput.email);
    const sanitizedSubject = sanitizeInput(userInput.subject);
    const sanitizedMessage = sanitizeInput(userInput.message);

    // Validate inputs using security utilities
    const nameValidation = validateName(sanitizedName);
    const emailValidation = validateEmail(sanitizedEmail);
    const messageValidation = validateMessage(sanitizedMessage);

    if (!nameValidation.valid) {
      setInvalidInput((prev) => ({ ...prev, name: true }));
      return notyf.error(nameValidation.message);
    }

    if (!emailValidation.valid) {
      setInvalidInput((prev) => ({ ...prev, email: true }));
      return notyf.error(emailValidation.message);
    }

    if (sanitizedSubject.length <= 2) {
      setInvalidInput((prev) => ({ ...prev, subject: true }));
      return notyf.error("Subject must be at least 2 characters long");
    }

    if (!messageValidation.valid) {
      setInvalidInput((prev) => ({ ...prev, message: true }));
      return notyf.error(messageValidation.message);
    }

    const templateParams = {
      user_name: sanitizedName,
      to_name: "Abhinav Sharma",
      from_name: sanitizedName,
      from_subject: sanitizedSubject,
      from_email: sanitizedEmail,
      reply_to: sanitizedEmail,
      message: sanitizedMessage,
      csrf_token: csrfToken,
    };

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      notyf.success("Message sent successfully!");

      setUserInputs({
        name: "",
        subject: "",
        email: "",
        message: "",
      });

      setLoading(false);
    } catch {
      setMessage({
        success: "",
        error: "Unable to send message at the moment. Please try again later.",
      });
      notyf.error("Unable to send message. Please try again later.");
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
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
      className="w-full max-w-sm sm:max-w-md mx-auto"
    >
      <div className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border border-transparent hover:border-violet-400 dark:hover:border-violet-500 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300 group overflow-hidden">
        <div className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl group-hover:border-2 group-hover:border-violet-400 group-hover:shadow-[0_0_32px_0_rgba(124,58,237,0.18)] transition-all duration-300" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              If the form doesn't work, you can also reach me via the social links below
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-xs text-green-600 dark:text-green-400">
              <Shield className="w-3 h-3" />
              <span>Secure form with spam protection</span>
            </div>
          </motion.div>

          {isLoading && <ProgressBar />}
          {message.success && <Alert message={message.success} type="success" />}
          {message.error && <Alert message={message.error} type="error" />}

          <form onSubmit={onSubmitEmailHandler} className="space-y-4 sm:space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring', bounce: 0.22 }}
            >
              <label
                className={`${invalidInput.name
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-700 dark:text-gray-200"
                  } text-sm font-semibold mb-2 flex items-center gap-2`}
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.22 }}
            >
              <label
                className={`${invalidInput.email
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-700 dark:text-gray-200"
                  } text-sm font-semibold mb-2 flex items-center gap-2`}
                htmlFor="email"
              >
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <motion.input
                autoComplete="email"
                name="email"
                value={userInput.email}
                onChange={inputHandler}
                className={`${invalidInput.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 dark:border-gray-600 focus:border-violet-500 focus:ring-violet-500/20"
                  } appearance-none block w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base leading-tight focus:outline-none focus:ring-4 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500`}
                id="email"
                type="email"
                placeholder="Enter your email address"
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.22 }}
            >
              <label
                className={`${invalidInput.subject
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-700 dark:text-gray-200"
                  } text-sm font-semibold mb-2 flex items-center gap-2`}
                htmlFor="subject"
              >
                <MessageSquare className="w-4 h-4" />
                Subject
              </label>
              <motion.input
                autoComplete="off"
                name="subject"
                value={userInput.subject}
                onChange={inputHandler}
                className={`${invalidInput.subject
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 dark:border-gray-600 focus:border-violet-500 focus:ring-violet-500/20"
                  } appearance-none block w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base leading-tight focus:outline-none focus:ring-4 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500`}
                id="subject"
                type="text"
                placeholder="Enter subject"
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, type: 'spring', bounce: 0.22 }}
            >
              <label
                className={`${invalidInput.message
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-700 dark:text-gray-200"
                  } text-sm font-semibold mb-2 flex items-center gap-2`}
                htmlFor="message"
              >
                <MessageSquare className="w-4 h-4" />
                Message
              </label>
              <motion.textarea
                name="message"
                value={userInput.message}
                onChange={inputHandler}
                className={`${invalidInput.message
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 dark:border-gray-600 focus:border-violet-500 focus:ring-violet-500/20"
                  } appearance-none block w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base leading-tight focus:outline-none focus:ring-4 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 resize-none`}
                id="message"
                rows={4}
                placeholder="Enter your message"
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: 'spring', bounce: 0.22 }}
            >
              <AccessibleButton
                type="submit"
                loading={isLoading}
                icon={<Send className="w-4 h-4 sm:w-5 sm:h-5" />}
                iconPosition="right"
                description="Submit the contact form to send your message"
                className="w-full"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </AccessibleButton>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Form;