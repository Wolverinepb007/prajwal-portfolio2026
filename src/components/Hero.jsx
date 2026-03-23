import React from 'react';
import { profile } from '../data/portfolioData';

export default function Hero() {
  return (
    <header className="h-screen flex items-center relative overflow-hidden bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.1),transparent_50%)]" id="about">
      <div className="max-w-[1100px] mx-auto px-8 z-10 w-full animate-fade-in-up">
        <span className="font-mono text-xl text-[#22d3ee] mb-8 block tracking-wider">
          {profile.role}
        </span>
        <h1 className="text-5xl md:text-[5rem] font-extrabold leading-[1.1] mb-6 bg-gradient-to-br from-[#f3f4f6] to-[#6366f1] text-transparent bg-clip-text">
          {profile.name}
        </h1>
        <div 
          className="text-lg md:text-xl text-[#9ca3af] max-w-[600px] mb-12 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: profile.bio }}
        />
        <div className="flex flex-wrap gap-6">
          <a href="#projects" className="cta-button">
            View Work
          </a>
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="glass-card !px-8 !py-4 text-white !no-underline hover:!bg-[rgba(255,255,255,0.05)]">
              Github
            </a>
          )}
          {profile.resume && profile.resume !== '#' && (
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="glass-card !px-8 !py-4 text-white !no-underline !border-[#22d3ee] hover:!bg-[rgba(34,211,238,0.05)]">
              Download Resume
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
