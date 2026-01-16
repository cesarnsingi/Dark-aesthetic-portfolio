'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, FileText } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';

const Education = () => {
	const educationData = [
		{
			school: "CPUT",
			location: "Cape Town, WC, South Africa",
			duration: "2017 - 2021",
			degree: "Electrical Engineering",
			image: "/education/college_img.jpg",
			coursework: [
				"Electrical Engineering",
				"C (Programming Language),",
				"Digital Systems,",
				"Data Analysis",
			],
			description:
				"During my time at CPUT, I took programming courses, including C programming, which provided me with a strong foundation in problem-solving, data analysis, and project management. My studies also included Digital Systems and Technical Documentation, where I discovered a genuine passion for software development. Working on projects and coding challenges helped me sharpen my skills and inspired me to pursue a career as a software engineer, creating efficient and scalable solutions."
		}
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<GraduationCap className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Education</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="space-y-12">
				{educationData.map((edu, index) => (
					<ScrollAnimation key={edu.school}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
						>
							<div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
								<Calendar className="w-4 h-4 text-gray-300" />
								<span className="text-gray-300">{edu.duration}</span>
							</div>

							<div className="grid md:grid-cols-[300px,1fr] gap-6">
								{/* Left Column - Image */}
								<div className="relative h-64 md:h-full">
									<Image
										src={edu.image}
										alt={edu.school}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 300px"
										priority
										quality={90}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
										<div className="p-6">
											<h3 className="text-xl font-bold mb-2">{edu.school}</h3>
											<div className="flex items-center gap-2 text-gray-300">
												<MapPin className="w-4 h-4" />
												<span>{edu.location}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Right Column - Content */}
								<div className="p-6">
									<div className="flex items-center gap-2 mb-4">
										<BookOpen className="w-5 h-5 text-gray-400" />
										<h4 className="text-lg font-semibold">{edu.degree}</h4>
									</div>

									<div className="flex items-start gap-2 text-gray-300 mb-6">
										<FileText className="w-5 h-5 mt-1 flex-shrink-0" />
										<p className="text-sm leading-relaxed">{edu.description}</p>
									</div>

									<div className="mb-6">
										<div className="flex flex-wrap gap-2">
											{edu.coursework.map((course) => (
												<span
													key={course}
													className="px-3 py-1 bg-white/10 rounded-full text-sm"
												>
													{course}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Education;
