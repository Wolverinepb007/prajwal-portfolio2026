import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full py-6 z-[100] transition-all duration-400 ease-smooth ${
        scrolled ? 'bg-[#0a0c10]/95 backdrop-blur-[12px] border-b border-[#FFCC00]/20 py-4' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-sans text-2xl font-black text-white no-underline tracking-tighter hover:text-[#FFCC00] transition-colors">
          PB<span className="text-[#FFCC00]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-widest text-[#9ca3af] hover:text-[#FFCC00] transition-colors duration-300 no-underline"
            >
              {link.name}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="cta-button !px-6 !py-2.5 !text-[10px] !tracking-[0.2em] !shadow-none">
            <span>Contact Me</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-[101] outline-none"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2 !bg-[#FFCC00]' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2 !bg-[#FFCC00]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0a0c10] z-[100] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-white no-underline hover:text-[#FFCC00] transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setIsOpen(false)}
              className="cta-button !px-12 !py-5 !text-lg"
            >
              <span>Contact Me</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
