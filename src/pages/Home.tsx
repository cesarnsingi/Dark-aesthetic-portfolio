'use client';

import { VercelLogo } from '@/components/TechLogos';
import { motion } from 'framer-motion';
import { Github, Linkedin, Copy, Check, FileDown, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = 'cesarnsingi@hotmail.com';

  const { data: githubData } = useSWR('https://api.github.com/users/crnsingi', fetcher);

  const displayRepos = (() => {
    const count = githubData?.public_repos ?? 0;
    return count < 5 ? count.toString() : `${Math.floor(count / 5) * 5}+`;
  })();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto">

        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          César Nsingi
        </motion.h1>

        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I design, code, and use data to build products.
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer, I build with TypeScript, React, TailWindCSS, Next.js and modern Web Technologies. Enthusiastic about Python.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a
              href="/files/cv_pdf/César_Nsingi_CV_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
              Download CV
            </a>

            <Link
              href="/about"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
              About Me
            </Link>
          </div>

          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-transparent transition-all cursor-copy sm:cursor-pointer"
          >
            <div className="absolute left-0 flex items-center">
              <div className="w-3 text-gray-500 group-hover:text-white transition-colors">
                <VercelLogo />
              </div>
              <span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white transition-colors">~</span>
            </div>

            <span className="text-gray-400 group-hover:text-white transition-colors ml-4 sm:text-base">
              {email}
            </span>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 hidden sm:block">
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
              )}
            </div>
          </button>
        </motion.div>

      {/* CENTERED & TIGHT SPACING FOR GITHUB + LINKEDIN */}
<motion.div
  className="flex justify-center items-center gap-6 mt-8 sm:mt-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  {/* GitHub */}
  <motion.a
    href="https://github.com/crnsingi"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center group"
    whileHover={{ y: -2 }}
  >
    <div className="p-1 sm:p-2 rounded-xl transition-colors">
      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors" />
    </div>

    <motion.div
      className="flex flex-col items-center mt-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <span className="text-base sm:text-lg font-semibold">{displayRepos}</span>
      <span className="text-xs sm:text-sm text-gray-400">GitHub Projects</span>
    </motion.div>
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    href="https://www.linkedin.com/in/cesar-nsingi/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center group"
    whileHover={{ y: -2 }}
  >
    <div className="p-1 sm:p-2 rounded-xl transition-colors">
      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors" />
    </div>

    <motion.div
      className="flex flex-col items-center mt-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <span className="text-base sm:text-lg font-semibold">750+</span>
      <span className="text-xs sm:text-sm text-gray-400">LinkedIn Followers</span>
    </motion.div>
  </motion.a>
</motion.div>

		

      </div>
    </div>
  );
};

export default Home;
