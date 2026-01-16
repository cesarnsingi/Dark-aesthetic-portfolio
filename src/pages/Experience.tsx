'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
	{
		title: "Software Engineer",
		company: "Cerins",
		location: "Luanda, Angola",
		period: "Jan 2025 - Present",
		type: "Internship",
		description: [
			"Led the design, development, and deployment of digital products from concept to production",
			"Implemented advanced features on a React.js platform, resulting in a 40% surge in user interaction"
		]
	},
	{
		title: "Customer Experience (CX) - Data Analyst",
		company: "Emirates Airlines",
		location: "Dubai, UAE",
		period: "Mar 2022 - Oct 2024",
		type: "Internship",
		description: [
			"Monitored system and app performance to identify trends and opportunities for software improvement.",
			"Logged and maintained detailed records of customer interactions to support service quality and reporting"
		]
	},
	{
		title: "Junior Software Engineer",
		company: "EJC Technology",
		location: "Cape Town, South Africa",
		period: "Dec 2019 - Feb 2022",
		type: "Internship",
		description: [
			"Engineered a real-time collaborative document editor using Next.js, TypeScript reducing latency by 30%",
			"Implemented and optimized a personal portfolio with Next.js and Tailwind CSS, improving performance by 40%"
		]
	},
];

const Experience = () => {
	return (
		<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
			<ScrollAnimation>
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
					<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
					Professional Experience
				</h2>
			</ScrollAnimation>

			<div className="space-y-8 sm:space-y-12">
				{experiences.map((exp) => (
					<ScrollAnimation key={exp.title}>
						<div className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/5">
							<div className="flex items-center gap-3 mb-4 sm:mb-6">
								<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl">
									<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
								</div>
								<div>
									<h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
									<p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
								</div>
							</div>

							<div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
								<MapPin className="w-4 h-4" />
								<span>{exp.location}</span>
								<span>•</span>
								<span>{exp.period}</span>
							</div>

							<ul className="space-y-3 sm:space-y-4">
								{exp.description.map((item, i) => (
									<li key={i} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
										<ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
										<span className="leading-relaxed">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Experience;
