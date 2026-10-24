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

const experiences = [
  {
    role: "Software Engineer",
    company: "Nabel Smart",
    period: "2026 - Present",
  },
  {
    role: "AI Data Analyst - Uber’s AI Team",
    company: "Volga Partners",
    period: "2026",
  },
  {
    role: "Software Engineer",
    company: "Cerins",
    period: "2025 - 2026",
  },
  {
    role: "Junior Software Engineer",
    company: "EJC Technology",
    period: "2019 - 2024",
  },
];

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
            to build thoughtful digital products.
            <br />
            <span className="font-medium">My main stack includes:</span>
            <br />
            <span className="inline-flex items-center gap-2">
              TypeScript <SiTypescript className="w-4 h-4" />
            </span>
            <br />
            <span className="inline-flex items-center gap-2">
              React <SiReact className="w-4 h-4" />
            </span>
            <br />
            <span className="inline-flex items-center gap-2">
              TailwindCSS <SiTailwindcss className="w-4 h-4" />
            </span>
            <br />
            <span className="inline-flex items-center gap-2">
              Next.js <SiNextdotjs className="w-4 h-4" />
            </span>
          </p>

          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400">
            Recently exploring{' '}
            <span className="inline-flex items-center gap-2 font-medium text-neutral-800 dark:text-neutral-200">
              Python <SiPython className="w-4 h-4" />
            </span>{' '}
            and data-driven systems.
          </p>

          {/* EXPERIENCE SECTION */}
          <div className="flex flex-col gap-y-5 mt-8">
            <h2 className="text-[15.8px] font-semibold text-neutral-800 dark:text-neutral-300">
              Experience
            </h2>

            {experiences.map((exp, index) => (
              <div key={index} className="flex w-full items-center justify-between">
                <div className="flex w-full flex-col">
                  <div className="flex items-center justify-between">
                    {/* Role and company on the same line */}
                    <span className="text-[13.5px] leading-none text-neutral-800 dark:text-neutral-300">
                      {exp.role} - {exp.company}
                    </span>

                    <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
                    <span className="text-[12.5px] leading-none text-neutral-600 dark:text-neutral-400">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA BUTTONS + SOCIAL LINKS in one line */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <a
              href="/files/cv_pdf/Cesar_Nsingi_CV_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-md hover:bg-neutral-800 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              CV
            </a>

            <Link
              href="/contact"
              className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Get in touch
            </Link>

            <a
              href="https://github.com/crnsingi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-md hover:bg-neutral-800 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/cesar-nsingi/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Developed by text below */}
          <p className="text-sm text-gray-400 mt-2 text-center">
            Built by Cesar Nsingi
          </p>
        </motion.div>

      </div>
    </div>
  );
}
