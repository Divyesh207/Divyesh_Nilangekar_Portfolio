import React from 'react';
import { Code2, Server, BrainCircuit, Layout, Database, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

const ICONS_MAP: Record<string, React.ReactNode> = {
  "PROGRAMMING": <Code2 className="w-5 h-5 text-accent-blue" />,
  "BACKEND": <Server className="w-5 h-5 text-accent-indigo" />,
  "DATA / MACHINE LEARNING": <BrainCircuit className="w-5 h-5 text-accent-emerald" />,
  "FRONTEND": <Layout className="w-5 h-5 text-sky-400" />,
  "DATABASE & ENGINEERING": <Database className="w-5 h-5 text-purple-400" />,
  "TOOLS & DEPLOYMENT": <Wrench className="w-5 h-5 text-amber-400" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-accent-blue uppercase">
              03 · TECHNICAL CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            STACK & SYSTEM COMPETENCIES.
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl font-mono">
            Core technologies, machine learning frameworks, databases, and engineering workflows verified through practical projects and academic coursework.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="subtle-glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent-blue/30 transition-colors">
                    {ICONS_MAP[cat.title] || <Code2 className="w-5 h-5 text-accent-blue" />}
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    {cat.skills.length} TECHNOLOGIES
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-wide uppercase mb-4">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-slate-200 group-hover:border-white/20 transition-all hover:bg-accent-blue/10 hover:text-accent-blue hover:border-accent-blue/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
