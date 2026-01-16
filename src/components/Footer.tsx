'use client';

import Link from 'next/link';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const pageLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Experience', path: '/experience' },
		{ name: 'Skills', path: '/skills' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Contact', path: '/contact' },
	];

	// Split links into columns
	const column1 = pageLinks.slice(0, 3);
	const column2 = pageLinks.slice(3, 5);
	const column3 = pageLinks.slice(5, 7);

	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
					{/* Branding */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-3">
							<Code2 className="w-8 h-8 text-white" />
							<span className="text-xl font-bold text-white">César Nsingi</span>
						</Link>
						<p className="text-sm text-gray-400">
							Software Engineer
						</p>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Contact</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="mailto:cesarnsingi@hotmail.com"
									className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
								>
									<Mail className="w-4 h-4" />
									cesarnsingi@hotmail.com
								</a>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Quick Links</h3>
						<div className="grid grid-cols-3 gap-x-6 gap-y-3">
							<div>
								{column1.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
							<div>
								{column2.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
							<div>
								{column3.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>
					</div>

					{/* Social */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Social</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/crnsingi"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://www.linkedin.com/in/cesar-nsingi/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="mailto:cesarnsingi@hotmail.com"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-400">
							© {currentYear} César Nsingi. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<span className="text-sm text-gray-400">
								César Nsingi&apos;s Portfolio
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
