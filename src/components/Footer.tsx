'use client';

import Link from 'next/link';
import { Code2, Mail } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
					{/* Branding */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-3">
							<Code2 className="w-8 h-8 text-white" />
							<span className="text-xl font-bold text-white">
								César Nsingi
							</span>
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
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-6">
					<div className="flex justify-center">
						<p className="text-sm text-gray-400">
							© {currentYear} César Nsingi. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
