'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    title: 'AME {EMA} LAB ORG',
    live: 'https://www.emaorg.com',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'NaVia-Cuts',
    live: 'https://www.naviacuts.com/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend', 'Vercel'],
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

const PREVIEW_W = 520;
const PREVIEW_H = 360;

type Project = {
  title: string;
  live: string;
  tags: string[];
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);
  const loadedRef = useRef(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const previewSrc =
    'https://api.microlink.io/?url=' +
    encodeURIComponent(project.live) +
    '&screenshot=true&meta=false&embed=screenshot.url';

  const handleMouseEnter = () => {
    setHovered(true);
    loadedRef.current = true;
  };

  useEffect(() => {
    if (imgLoaded && imgRef.current) {
      setScrollDistance(-(imgRef.current.offsetHeight - PREVIEW_H));
    }
  }, [imgLoaded]);

  return (
    <motion.div
      className="relative flex flex-col gap-1 py-2.5 border-b border-neutral-100 dark:border-neutral-800"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
    >
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

      <div className="text-xs text-neutral-500">
        {project.tags.join(' · ')} {/* consistent middle dot separator */}
      </div>

      <motion.div
        className="absolute left-[105%] top-1/2 z-50 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 shadow-xl"
        style={{ width: PREVIEW_W, height: PREVIEW_H }}
        initial={{ opacity: 0, scale: 0.92, y: '-50%' }}
        animate={
          hovered
            ? { opacity: 1, scale: 1, y: '-50%' }
            : { opacity: 0, scale: 0.92, y: '-50%' }
        }
        transition={{ duration: 0.2, ease: 'easeOut' }}
        aria-hidden
      >
        {(!imgLoaded || imgError) && (
          <div className="w-full h-full flex flex-col gap-2 p-4 animate-pulse">
            <div className="h-3 w-3/5 bg-neutral-200 dark:bg-neutral-700 rounded" />
            <div className="h-2 w-4/5 bg-neutral-200 dark:bg-neutral-700 rounded" />
            <div className="h-2 w-2/3 bg-neutral-200 dark:bg-neutral-700 rounded" />
            <div className="h-10 w-full bg-neutral-200 dark:bg-neutral-700 rounded mt-2" />
            <div className="h-2 w-3/4 bg-neutral-200 dark:bg-neutral-700 rounded" />
          </div>
        )}

        {(hovered || loadedRef.current) && !imgError && (
          <motion.img
            ref={imgRef}
            src={previewSrc}
            alt={project.title + ' preview'}
            className="w-full block"
            style={{ display: imgLoaded ? 'block' : 'none' }}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            animate={
              hovered && imgLoaded
                ? { y: [0, 0, scrollDistance, scrollDistance, 0] }
                : { y: 0 }
            }
            transition={
              hovered && imgLoaded
                ? {
                    duration: 6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    times: [0, 0.1, 0.85, 0.95, 1],
                  }
                : {}
            }
          />
        )}

        <span className="absolute bottom-2 right-2 text-[10px] text-neutral-400 bg-white/80 dark:bg-black/60 rounded px-1.5 py-0.5 backdrop-blur-sm">
          
        </span>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="px-5 py-24 flex justify-center">
      <div className="w-full max-w-[540px]">
        <motion.h2
          className="text-[22px] font-semibold leading-7 text-neutral-900 dark:text-neutral-200 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
