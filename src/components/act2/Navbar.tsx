import React from 'react';
import { RotateCcw, FileText, Menu } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
  onReplayStory: () => void;
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateSection,
  onReplayStory,
  onOpenMenu,
}) => {
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full subtle-glass border-b border-white/5 px-6 py-3.5 md:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Monogram / Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateSection('about')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-blue/40 transition-colors">
              <span className="font-mono text-xs font-bold text-accent-blue">DN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-wider text-white uppercase group-hover:text-accent-blue transition-colors">
                DIVYESH NILANGEKAR
              </span>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase hidden sm:inline-block">
                AI/ML Engineer & Builder
              </span>
            </div>
          </button>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 font-mono text-xs text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigateSection(link.id)}
              className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Replay Story CTA */}
          <button
            onClick={onReplayStory}
            className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-all active:scale-95"
            title="Replay the 7-scene cinematic story"
          >
            <RotateCcw className="w-3.5 h-3.5 text-accent-blue" />
            <span className="hidden sm:inline">REPLAY STORY</span>
          </button>

          {/* Resume Download */}
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noreferrer"
            download="Divyesh_Nilangekar_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-accent-blue bg-accent-blue/10 hover:bg-accent-blue/20 border border-accent-blue/30 px-3 py-1.5 rounded-lg transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
