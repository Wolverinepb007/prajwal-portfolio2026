import React from 'react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white/[0.01]">
      <div className="max-w-[1100px] mx-auto px-8">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card flex flex-col gap-6">
              {project.image && (
                <div className="w-full h-[200px] bg-[#1a1e26] rounded-2xl overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-[#9ca3af] text-[0.95rem]">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools_used && project.tools_used.split(',').map(tool => (
                  <span key={tool} className="bg-[#6366f1]/10 text-[#6366f1] px-3 py-1 rounded-full text-xs font-mono">
                    {tool.trim()}
                  </span>
                ))}
              </div>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] no-underline text-sm font-semibold hover:underline mt-auto">
                  Explore Repository →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
