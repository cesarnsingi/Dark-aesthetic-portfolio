'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "10+ Projects",
			description: "Completed full-stack web applications"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "1 Internship, then 2 Contracts",
			description: "Professional work experience"
		},
	];

	const interests = [
		"Web Development",
		"UI/UX Design",
		"Cloud Computing",
		"Data Engineering",
		"Open Source",
		"Artificial Intelligence"
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
					About Me
				</motion.h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8">
				<ScrollAnimation>
					<div className="aspect-square overflow-hidden rounded-2xl">
						<img
							src="/profile/profile.jpg"
							alt="Cesar Nsingi"
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							Hi! I’m a full-stack developer with over 5 years of experience building modern, scalable web applications with a strong focus on intuitive, user-friendly interfaces. I enjoy turning complex requirements into clean, maintainable, and visually polished solutions.
						</p>
						<p className="text-gray-300 leading-relaxed">
							I work extensively with TypeScript, React, Next.js, and Python, and have a solid understanding of modern web architecture, performance optimization, and responsive design. I actively stay up to date with industry best practices to deliver high-quality, production-ready applications.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Known for my attention to detail and strong problem-solving skills, I collaborate effectively with designers, developers, and stakeholders to deliver reliable results. Outside of professional work, I enjoy exploring new technologies and building side projects that continuously sharpen my technical and creative skills.
						</p>
					</div>
				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">
						Achievements
					</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{achievements.map((achievement) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
									<div className="text-white mb-4">{achievement.icon}</div>
									<h4 className="text-xl font-semibold mb-2">
										{achievement.title}
									</h4>
									<p className="text-gray-400">
										{achievement.description}
									</p>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">
						Areas of Interest
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{interests.map((interest) => (
							<ScrollAnimation key={interest}>
								<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
									<Globe className="w-5 h-5 text-gray-400" />
									<span className="text-gray-300">{interest}</span>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default About;
