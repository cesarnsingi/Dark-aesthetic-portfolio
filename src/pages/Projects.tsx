'use client';

import { ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
  {
    title: 'AME {EMA} LAB ORG',
    live: 'https://www.emaorg.com',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
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
    <div className="pt-20 px-4 max-w-5xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          Projects
        </h2>
      </ScrollAnimation>

      <div className="flex flex-col gap-4">
        {projects.map(project => (
          <ScrollAnimation key={project.title}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-white/10">

              <div className="flex flex-wrap items-center gap-2">
                {/* Title + Live link on same line */}
                <span className="text-lg font-semibold text-white">
                  {project.title}
                </span>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gray-300 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-purple-500/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
