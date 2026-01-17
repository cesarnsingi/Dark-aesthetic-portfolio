'use client';

import { Mail } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 py-12">
					{/* Contact */}
					<div className="space-y-4 text-center">
						<h3 className="text-sm font-semibold text-white">Contact</h3>
						<a
							href="mailto:cesarnsingi@hotmail.com"
							className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
						>
							<Mail className="w-4 h-4" />
							cesarnsingi@hotmail.com
						</a>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-6">
					<div className="flex justify-center">
						<p className="text-sm text-gray-400">
							© {currentYear} All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
