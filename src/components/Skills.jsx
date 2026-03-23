import React from 'react';
import { skills, profile } from '../data/portfolioData';

export default function Skills() {
  return (
    <div className="w-full relative">
      {profile.principles && (
        <section id="principles" className="py-24 bg-white/[0.02]">
          <div className="max-w-[1100px] mx-auto px-8">
            <h2 className="section-title">Quality Assurance Principles</h2>
            <div className="glass-card max-w-[900px] mx-auto">
              <div 
                className="qa-manifesto text-lg leading-[1.8]"
                dangerouslySetInnerHTML={{ __html: profile.principles }}
              />
            </div>
          </div>
        </section>
      )}

      <section id="skills" className="py-24">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="glass-card">
                <h3 className="text-[#22d3ee] text-2xl mb-6">{category}</h3>
                {skillList.map(skill => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-[#9ca3af]">{skill.proficiency * 10}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#6366f1] to-[#22d3ee] rounded-full"
                        style={{ width: `${skill.proficiency * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
