'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AME {EMA} LAB ORG',
    live: 'https://www.emaorg.com',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
  },
    {
    title: 'NaVia-Cuts',
    live: 'https://www.naviacuts.com/',
    tags: ['Next.js', 'TypeScript', 'Tailwinds', 'Resend','Vercel'],
  },

  {
    title: 'Joshua Organisation',
    live: 'https://joshuaorganisation.com',
    tags: ['Next.js', 'TypeScript', 'Liveblocks', 'Fabric.js', 'Shadcn'],
  },
  {
    title: 'IM - Executive Profile',
    live: 'https://im-profile.vercel.app',
    tags: ['Tailwind CSS', 'React.js', 'Next.js', 'Vercel'],
  },
  {
    title: 'Odonto Care',
    live: 'https://odontocare-tan.vercel.app',
    tags: ['React.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'AngoTour',
    live: 'https://angotour.vercel.app',
    tags: ['React.js', 'Tailwind CSS', 'TypeScript'],
  },
];

const Projects = () => {
  return (
    <div className="px-5 py-24 flex justify-center">
      <div className="w-full max-w-[540px]">

        {/* SECTION TITLE - plain text like Home */}
        <motion.h2
          className="text-[22px] font-semibold leading-7 text-neutral-900 dark:text-neutral-200 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-col gap-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Project Title + Live Link */}
              <div className="flex items-center gap-2">
                <span className="text-[14.5px] font-medium text-neutral-800 dark:text-neutral-200">
                  {project.title}
                </span>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>

              {/* Tags - simple inline text like Home experience */}
              <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                {project.tags.join(' • ')}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
