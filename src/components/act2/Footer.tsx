import React from 'react';
import { ArrowUp, RotateCcw, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface FooterProps {
  onReplayStory: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayStory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#05070a] border-t border-white/5 py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-accent-blue">DN</span>
            </div>
            <span className="text-sm font-bold tracking-widest text-white uppercase">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="font-mono text-xs text-slate-400 uppercase tracking-wider">
            {PERSONAL_INFO.title}
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-blue transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-blue transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-accent-blue transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>

        {/* Right Navigation & Scroll to Top */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReplayStory}
            className="font-mono text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5 text-accent-blue" />
            <span>REPLAY STORY</span>
          </button>
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="font-mono text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 p-2 rounded-lg transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
        <span>© 2026 Divyesh Nilangekar. All rights reserved.</span>
        <span>Built with React, TypeScript, Vite & GSAP</span>
      </div>
    </footer>
  );
};
