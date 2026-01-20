'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  FileDown,
  Send
} from 'lucide-react';
import Link from 'next/link';
import useSWR from 'swr';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython
} from 'react-icons/si';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home = () => {
  const { data: githubData } = useSWR(
    'https://api.github.com/users/crnsingi',
    fetcher
  );

  const displayRepos = (() => {
    const count = githubData?.public_repos ?? 0;
    return count < 5 ? count.toString() : `${Math.floor(count / 5) * 5}+`;
  })();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto">

        {/* NAME */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          César Nsingi
        </motion.h1>

        {/* TAGLINE */}
        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I design, code, and use data to build products.
        </motion.h1>

        {/* DESCRIPTION WITH INLINE ICONS */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer, I build with{' '}
          <span className="inline-flex items-center gap-1 text-white">
            <SiTypescript className="w-5 h-5 text-blue-500" />
            TypeScript
          </span>
          ,{' '}
          <span className="inline-flex items-center gap-1 text-white">
            <SiReact className="w-5 h-5 text-cyan-400" />
            React
          </span>
          ,{' '}
          <span className="inline-flex items-center gap-1 text-white">
            <SiTailwindcss className="w-5 h-5 text-sky-400" />
            TailwindCSS
          </span>
          ,{' '}
          <span className="inline-flex items-center gap-1 text-white">
            <SiNextdotjs className="w-5 h-5 text-white" />
            Next.js
          </span>{' '}
          and modern Web Technologies. Enthusiastic about{' '}
          <span className="inline-flex items-center gap-1 text-white">
            <SiPython className="w-5 h-5 text-yellow-400" />
            Python
          </span>
          .
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
            <a
              href="/files/cv_pdf/Cesar_Nsingi_CV_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
              Download CV
            </a>

            <Link
              href="/contact"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              Get in touch
            </Link>
          </div>
        </motion.div>

        {/* SOCIAL STATS */}
        <motion.div
          className="flex justify-center items-center gap-6 mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/crnsingi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            whileHover={{ y: -2 }}
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-base sm:text-lg font-semibold">
              {displayRepos}
            </span>
            <span className="text-xs sm:text-sm text-gray-400">
              GitHub Projects
            </span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/cesar-nsingi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            whileHover={{ y: -2 }}
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-base sm:text-lg font-semibold">750+</span>
            <span className="text-xs sm:text-sm text-gray-400">
              LinkedIn Followers
            </span>
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
