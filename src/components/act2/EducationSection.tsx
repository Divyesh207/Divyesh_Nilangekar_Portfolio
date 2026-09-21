import React from 'react';
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-accent-blue uppercase">
              06 · ACADEMIC TIMELINE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            EDUCATION & SPECIALIZATION.
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl font-mono">
            Formal technical education in Artificial Intelligence, Machine Learning algorithms, and computer systems engineering.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((item) => (
            <div
              key={item.id}
              className="subtle-glass-card p-6 md:p-10 rounded-3xl flex flex-col justify-between transition-all border border-white/10 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-accent-blue">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-mono text-xs text-accent-blue uppercase tracking-widest block mb-1 font-semibold">
                    {item.status === 'Completed' ? 'GRADUATED' : 'PURSUING'}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {item.institution}
                  </p>
                </div>

                {item.aggregate && (
                  <div className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-lg">
                    <span className="font-bold">{item.aggregate}</span>
                    <span>·</span>
                    <span>{item.honors}</span>
                  </div>
                )}

                <ul className="flex flex-col gap-2.5">
                  {item.details.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
