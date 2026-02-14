'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown, Send } from 'lucide-react';
import Link from 'next/link';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
} from 'react-icons/si';

export default function Home() {
  return (
    <div className="flex justify-center px-5 py-24">
      <div className="w-full max-w-[540px]">

        {/* NAME */}
        <motion.h1
          className="text-[22px] font-semibold leading-7 text-neutral-900 dark:text-neutral-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          César Nsingi
        </motion.h1>

        {/* ROLE */}
        <motion.span
          className="text-sm font-medium text-neutral-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Software Engineer
        </motion.span>

        {/* DESCRIPTION */}
        <motion.div
          className="mt-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400">
            I combine{' '}
            <span className="font-medium text-neutral-800 dark:text-neutral-200">
              design & code
            </span>{' '}
            to build thoughtful digital products. My main stack includes{' '}
            <span className="inline-flex items-center gap-1">
              <SiTypescript className="w-4 h-4" /> TypeScript
            </span>
            ,{' '}
            <span className="inline-flex items-center gap-1">
              <SiReact className="w-4 h-4" /> React
            </span>
            ,{' '}
            <span className="inline-flex items-center gap-1">
              <SiTailwindcss className="w-4 h-4" /> TailwindCSS
            </span>
            , and{' '}
            <span className="inline-flex items-center gap-1">
              <SiNextdotjs className="w-4 h-4" /> Next.js
            </span>.
          </p>

          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400">
            Recently exploring{' '}
            <span className="inline-flex items-center gap-1 font-medium text-neutral-800 dark:text-neutral-200">
              <SiPython className="w-4 h-4" /> Python
            </span>{' '}
            and data-driven systems.
          </p>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/files/cv_pdf/Cesar_Nsingi_CV_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-md hover:bg-neutral-800 transition-colors flex items-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </a>

          <Link
            href="/contact"
            className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Get in touch
          </Link>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          className="mt-12 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/crnsingi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/cesar-nsingi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

      </div>
    </div>
  );
}
