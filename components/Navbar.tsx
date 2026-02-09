import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenContact: (title?: string) => void;
  theme?: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact, theme = 'light' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDarkTheme = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const useDarkStyle = scrolled || !isDarkTheme;

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'py-3 shadow-lg glass border-b border-gray-100/50' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center group">
          <img
            src={useDarkStyle ? "/assets/logo_black.png" : "/assets/logo.png"}
            alt="DIMAK Logo"
            className="h-12 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm uppercase tracking-wider hover:text-dimak-red transition-colors relative group ${useDarkStyle ? 'text-gray-600' : 'text-gray-300'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dimak-red transition-all group-hover:w-full"></span>
            </a>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden focus:outline-none transition-colors ${useDarkStyle ? 'text-dimak-dark' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100"
          >
            <div className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-dimak-dark hover:text-dimak-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;