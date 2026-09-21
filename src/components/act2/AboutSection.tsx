import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-accent-blue uppercase">
            01 · ABOUT THE BUILDER
          </span>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0c111c] shadow-2xl">
              <img
                src="/profile/hero-portrait.png"
                alt="Divyesh Nilangekar"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">DIVYESH NILANGEKAR</h4>
                  <p className="font-mono text-[10px] text-slate-300">Pune, Maharashtra, India</p>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>AVAILABLE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              I BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-accent-blue">INTELLIGENT PRODUCTS.</span>
            </h2>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              {PERSONAL_INFO.bio}
            </p>

            <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-10">
              My engineering approach bridges machine learning with full-stack architecture — designing reliable FastAPI backends, PostgreSQL schemas, and dynamic frontend experiences that turn complex data pipelines into intuitive software.
            </p>

            {/* Key Fact Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-10">
              {PERSONAL_INFO.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="subtle-glass-card p-4 rounded-xl flex flex-col justify-between transition-all"
                >
                  <span className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono tracking-tight">
                    {stat.value}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] md:text-xs text-slate-400 uppercase block font-medium">
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-accent-blue/80 block mt-0.5 truncate">
                      {stat.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Research Publication Feature Banner */}
            <div className="subtle-glass p-5 rounded-xl border border-accent-blue/20 bg-gradient-to-r from-accent-blue/5 via-transparent to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-accent-blue/10 border border-accent-blue/30 text-accent-blue flex-shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] text-accent-blue font-semibold tracking-wider uppercase">
                      RESEARCH PUBLICATION · IJPREMS 2026
                    </span>
                  </div>
                  <h4 className="text-xs md:text-sm font-semibold text-white">
                    CASHBUDDY: An AI Driven Personal Finance Management System
                  </h4>
                  <p className="font-mono text-[10px] text-slate-400 mt-0.5">
                    DOI: 10.58257/IJPREMS51878 · Paper ID: IJPREMS260300003670
                  </p>
                </div>
              </div>

              <a
                href="https://doi.org/10.58257/IJPREMS51878"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-white bg-accent-blue/20 hover:bg-accent-blue/30 border border-accent-blue/40 px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95"
              >
                <span>VIEW PAPER</span>
                <ExternalLink className="w-3 h-3 text-accent-blue" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
