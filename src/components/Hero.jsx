import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0c10]" id="about">
      <div className="wolverine-grid" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1000px] mx-auto px-6 md:px-12 z-10 w-full text-center"
      >
        <motion.span 
          variants={itemVariants}
          className="font-black text-sm md:text-base text-[#FFCC00] mb-6 block tracking-[0.4em] uppercase"
        >
          {profile.role}
        </motion.span>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.9] mb-10 text-white tracking-tighter uppercase"
        >
          {profile.name}<span className="text-[#FFCC00]">.</span>
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="text-lg md:text-2xl text-[#9ca3af] max-w-[800px] mx-auto mb-16 leading-relaxed font-bold"
          dangerouslySetInnerHTML={{ __html: profile.bio }}
        />

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
          <a href="#projects" className="cta-button">
            <span>View My Work</span>
          </a>
          {profile.github && (
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-card !px-10 !py-4 text-white !no-underline hover:border-[#FFCC00] transition-all !flex-row !gap-2 !p-0 !bg-transparent !border-white/10"
            >
              <span className="font-black uppercase tracking-widest text-sm">Github</span>
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* Wolverine Claw Mark Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </motion.div>
    </header>
  );
}
