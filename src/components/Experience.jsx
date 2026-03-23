import React from 'react';
import { motion } from 'framer-motion';
import { experiences, certifications } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0c10] relative">
      <div className="wolverine-grid" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <h2 className="section-title">Professional Journey</h2>
        
        <div className="relative mt-24 mb-32 max-w-[900px] mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-[#FFCC00]/10 hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card !bg-black/30 !p-8 border-[#FFCC00]/10 hover:border-[#FFCC00]/40">
                    <span className="text-[#FFCC00] font-black italic text-xs tracking-widest uppercase mb-4 block">
                      {exp.duration}
                    </span>
                    <h3 className="text-2xl font-black text-white italic uppercase mb-2 tracking-tighter">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-bold text-[#9ca3af] mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-[#9ca3af] leading-relaxed font-bold text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-none bg-[#FFCC00] shadow-[0_0_20px_#FFCC00] z-10 rotate-45" />

                {/* Empty Side for Spacing */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications - Center Aligned */}
        {certifications && certifications.length > 0 && (
          <>
            <h2 className="section-title !text-3xl !mt-32">Honors & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-[1000px] mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card !p-8 border-white/5 hover:border-[#FFCC00]/30"
                >
                  <div className="w-12 h-12 bg-[#FFCC00]/10 rounded-none flex items-center justify-center mb-6 mx-auto rotate-45 border border-[#FFCC00]/20">
                    <span className="text-[#FFCC00] font-black -rotate-45">🏆</span>
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 italic">{cert.name}</h3>
                  <p className="text-xs font-black text-[#FFCC00] tracking-widest uppercase">{cert.issuing_organization}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
