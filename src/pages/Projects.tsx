'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
  {
    title: 'AME {EMA} LAB ORG',
    description:
      'Developed a dynamic, responsive website using TypeScript, React, and Next.js, enhancing user engagement and accessibility.',
    image: '/projects_img/project-1.png',
    live: 'https://www.emaorg.com',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'Joshua Organisation',
    description:
      'Service provider specializing in Maritime Training, Visa Services, Education, Transportation, and Accommodation.',
    image: '/projects_img/project-2.png',
    live: 'https://joshuaorganisation.com',
    tags: ['Next.js', 'TypeScript', 'Liveblocks', 'Fabric.js', 'Shadcn', 'Tailwind CSS'],
  },
  {
    title: 'IM - Executive Profile',
    description:
      'Designed and developed a professional portfolio using TypeScript and React, showcasing projects with interactive features.',
    image: '/projects_img/project-3.png',
    live: 'https://im-profile.vercel.app',
    tags: ['Tailwind CSS', 'React.js', 'Next.js', 'Vercel'],
  },
  {
    title: 'Odonto Care',
    description:
      'Built a full-featured dental service booking site with TypeScript and React, streamlining appointment scheduling and client interaction.',
    image: '/projects_img/project-4.png',
    live: 'https://odontocare-tan.vercel.app',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Vercel'],
  },
  {
    title: 'AngoTour',
    description:
      'Travel App connecting clients to seamless travel and tourism experiences.',
    image: '/projects_img/project-5.png',
    live: 'https://angotour.vercel.app',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm flex flex-col h-full">
              {/* Make image auto height and fit container */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-64 object-contain bg-gray-900"
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
