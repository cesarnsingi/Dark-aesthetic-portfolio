'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import SearchDialog from './SearchDialog';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clientPath, setClientPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setClientPath(pathname);
  }, [pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    // ❌ Contact removed from navbar
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Code2 className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">César</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <SearchDialog />

              {clientPath &&
                navLinks.map((link) => (
                  <Link
                    key={`nav-${link.path}`}
                    href={link.path}
                    className={`nav-link ${
                      clientPath === link.path
                        ? 'bg-white/15 backdrop-blur-sm'
                        : ''
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
            </div>

            {/* Mobile header right */}
            <div className="flex md:hidden items-center space-x-2">
              <SearchDialog />
              <button
                className="p-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && clientPath && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/50 backdrop-blur-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={`mobile-${link.path}`}
                  href={link.path}
                  className={`block px-3 py-2 text-gray-400 hover:text-white transition-colors ${
                    clientPath === link.path
                      ? 'bg-white/10 backdrop-blur-sm text-white'
                      : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
