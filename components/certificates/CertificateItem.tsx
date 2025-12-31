'use client';

import { useState } from 'react';
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ExternalLink, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";
import React from 'react';

interface CertificateItemProps {
  title: string;
  organization: string;
  issueDate: string;
  certificateImg: string;
  verifyUrl?: string;
}

export default function CertificateItem({
  title,
  organization,
  issueDate,
  certificateImg,
  verifyUrl,
}: CertificateItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-full h-full p-[3px] rounded-xl sm:rounded-2xl lg:rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? `linear-gradient(to right, #8b5cf6, #3b82f6, #d946ef, #06b6d4, #8b5cf6)`
          : 'transparent',
        transition: 'background 0.3s ease'
      }}
    >
      <div
        className={`absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          background: 'linear-gradient(to right, #8b5cf6, #3b82f6, #d946ef, #06b6d4, #8b5cf6)',
          animation: 'none'
        }}
      />

      <Card className="relative flex flex-col w-full h-full bg-white/85 dark:bg-gray-900/85 backdrop-blur-2xl border border-white/30 dark:border-gray-700/40 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl transition-all duration-700 overflow-hidden z-10">

        <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl">
          {certificateImg ? (
            <div className="relative w-full aspect-[4/3]">
              <Image
                className="object-cover w-full h-full transition-all duration-700"
                src={certificateImg}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />
            </div>
          ) : (
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <Award className="w-16 h-16 text-gray-400 dark:text-gray-500" />
            </div>
          )}

          <motion.div
            className="absolute top-3 right-3 z-20"
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge className="px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm bg-amber-500/90 text-white border border-amber-400/50">
              {issueDate}
            </Badge>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col p-3 sm:p-4 md:p-5 lg:p-6 space-y-3 sm:space-y-4 min-w-0">

          <motion.h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-200 group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:via-blue-500 group-hover:to-fuchsia-500 dark:group-hover:from-violet-400 dark:group-hover:via-blue-400 dark:group-hover:to-fuchsia-400 transition-all duration-700 leading-tight tracking-tight"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h2>

          <motion.div
            className="flex items-center gap-2"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Award className="h-4 w-4 text-violet-500 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              {organization}
            </span>
          </motion.div>

          {verifyUrl && (
            <motion.div
              className="pt-2"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.span whileHover={{ scale: 1.02 }} className="inline-block">
                <Link
                  target="_blank"
                  href={verifyUrl}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-white bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500 hover:from-violet-400 hover:via-blue-400 hover:to-fuchsia-400 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm font-semibold group/link ring-2 ring-transparent hover:ring-violet-300/30 dark:hover:ring-violet-400/30 w-full justify-center"
                >
                  Verify Certificate
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </motion.span>
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
}