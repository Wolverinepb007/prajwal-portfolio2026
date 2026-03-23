import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0c10] relative">
      <div className="wolverine-grid" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card group !p-0 overflow-hidden !items-stretch text-left border-white/5 hover:border-[#FFCC00]/30"
            >
              <div className="relative h-72 overflow-hidden bg-black/40">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col flex-grow items-center text-center">
                <p className="text-[#9ca3af] mb-8 text-lg font-bold leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {project.tools_used && project.tools_used.split(',').map(tool => (
                    <span 
                      key={tool} 
                      className="px-4 py-1.5 bg-[#FFCC00]/5 text-[#FFCC00] border border-[#FFCC00]/20 text-[10px] font-black uppercase tracking-widest italic"
                    >
                      {tool.trim()}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex justify-center gap-6">
                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#FFCC00] font-black uppercase tracking-[0.2em] text-xs transition-colors flex items-center gap-2"
                    >
                      Explore Project <span className="text-[#FFCC00]">→</span>
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#9ca3af] hover:text-[#FFCC00] font-black uppercase tracking-[0.2em] text-xs transition-colors"
                    >
                      Github code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
