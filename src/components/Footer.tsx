'use client';

const Footer = () => {
	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-8">
					<div className="flex flex-col items-center">
						<p className="text-sm text-gray-400">
							Design & Developed by Cesar Nsingi
						</p>
					</div>
				</div>

			</div>
		</footer>
	);
};

export default Footer;
