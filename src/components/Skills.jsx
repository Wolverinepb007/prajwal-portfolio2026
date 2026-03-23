import React from 'react';
import { motion } from 'framer-motion';
import { skills, profile } from '../data/portfolioData';

export default function Skills() {
  return (
    <div className="w-full relative">
      <div className="wolverine-grid" />
      
      {profile.principles && (
        <section id="principles" className="py-24 bg-white/[0.02]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
            <h2 className="section-title">Quality Assurance Principles</h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card max-w-[1000px] mx-auto !p-8 md:!p-16"
            >
              <div 
                className="qa-manifesto text-lg md:text-2xl leading-[1.8] text-[#9ca3af] font-bold italic"
                dangerouslySetInnerHTML={{ __html: profile.principles }}
              />
            </motion.div>
          </div>
        </section>
      )}

      <section id="skills" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {Object.entries(skills).map(([category, skillList], catIdx) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="glass-card !bg-black/40 !p-8 border-[#FFCC00]/10"
              >
                <h3 className="text-[#FFCC00] text-xl md:text-2xl mb-10 font-black uppercase tracking-widest italic text-center w-full">{category}</h3>
                {skillList.map(skill => (
                  <div key={skill.name} className="mb-8 last:mb-0 w-full flex flex-col items-center">
                    <div className="flex justify-between mb-3 px-1 w-full max-w-[250px]">
                      <span className="text-white font-black uppercase text-xs tracking-wider">{skill.name}</span>
                      <span className="text-[#9ca3af] font-mono text-xs">{skill.proficiency * 10}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-none overflow-hidden relative w-full max-w-[250px]">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
