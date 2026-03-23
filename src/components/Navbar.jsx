import React from 'react';
import { profile } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full py-6 z-[100] transition-all duration-400 ease-smooth ${
        scrolled ? 'bg-[#0a0c10]/80 backdrop-blur-[10px] border-b border-white/10 py-4' : ''
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-8 flex justify-between items-center">
        <a href="#" className="font-sans text-2xl font-extrabold text-[#f3f4f6] no-underline">
          PB.
        </a>
        <div className="hidden md:flex gap-10">
          <a href="#about" className="text-[#9ca3af] hover:text-[#6366f1] transition-colors duration-400">About</a>
          {profile.principles && (
            <a href="#principles" className="text-[#9ca3af] hover:text-[#6366f1] transition-colors duration-400">Principles</a>
          )}
          <a href="#skills" className="text-[#9ca3af] hover:text-[#6366f1] transition-colors duration-400">Skills</a>
          <a href="#projects" className="text-[#9ca3af] hover:text-[#6366f1] transition-colors duration-400">Projects</a>
          <a href="#experience" className="text-[#9ca3af] hover:text-[#6366f1] transition-colors duration-400">Experience</a>
        </div>
        <a href={`mailto:${profile.email}`} className="cta-button">
          Contact Me
        </a>
      </div>
    </nav>
  );
}
