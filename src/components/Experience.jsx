import React from 'react';
import { experiences, certifications } from '../data/portfolioData';

export default function Experience() {
  return (
    <>
      <section id="experience" className="py-24">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className="section-title">Professional Journey</h2>
          <div className="max-w-[800px] mx-auto">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-12 border-l-2 border-white/10 mb-12 last:mb-0 before:absolute before:left-[-9px] before:top-0 before:w-4 before:h-4 before:bg-[#6366f1] before:rounded-full before:shadow-[0_0_10px_#6366f1]">
                <span className="block text-[#22d3ee] text-sm mb-2 font-mono">
                  {exp.duration}
                </span>
                <h3 className="text-2xl mb-2">{exp.position}</h3>
                <p className="text-[#6366f1] font-semibold mb-4">{exp.company}</p>
                <p className="text-[#9ca3af] leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {certifications && certifications.length > 0 && (
        <section id="certifications" className="py-24 bg-white/[0.01]">
          <div className="max-w-[1100px] mx-auto px-8">
            <h2 className="section-title">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass-card !p-6">
                  <h4 className="mb-2 text-lg">{cert.name}</h4>
                  <p className="text-[#22d3ee] text-sm mb-2">{cert.issuing_organization}</p>
                  {cert.issue_date && (
                    <p className="text-[#9ca3af] text-xs">
                      {new Date(cert.issue_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
