import React from 'react';
import { X, ArrowRight, Film } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onReplayStory: () => void;
  onJumpToScene: (sceneId: number) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onReplayStory,
  onJumpToScene,
}) => {
  if (!isOpen) return null;

  const navItems = [
    { id: 'about', label: 'ABOUT', number: '01' },
    { id: 'projects', label: 'WORK & PRODUCTS', number: '02' },
    { id: 'skills', label: 'TECHNICAL SKILLS', number: '03' },
    { id: 'achievements', label: 'ACHIEVEMENTS', number: '04' },
    { id: 'certifications', label: 'CERTIFICATIONS', number: '05' },
    { id: 'education', label: 'EDUCATION', number: '06' },
    { id: 'contact', label: 'CONTACT', number: '07' },
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    onClose();
  };

  const handleSceneClick = (sceneId: number) => {
    onJumpToScene(sceneId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-md h-full bg-[#090D15] border-l border-white/10 p-8 flex flex-col justify-between overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-accent-blue tracking-widest uppercase block">
              NAVIGATION
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              DIVYESH NILANGEKAR
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close navigation"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Navigation Links */}
        <nav className="py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 text-left"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-slate-400 group-hover:text-accent-blue transition-colors">
                  {item.number}
                </span>
                <span className="text-base font-semibold text-slate-200 group-hover:text-white tracking-wide transition-colors">
                  {item.label}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </nav>

        {/* Cinematic Scenes Quick Jump */}
        <div className="py-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs text-slate-400 tracking-wider flex items-center gap-1.5 uppercase">
              <Film className="w-3.5 h-3.5 text-accent-blue" />
              CINEMATIC SCENES
            </span>
            <button
              onClick={() => {
                onReplayStory();
                onClose();
              }}
              className="font-mono text-[10px] text-accent-blue hover:underline uppercase"
            >
              Play from Start
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7].map((sId) => (
              <button
                key={sId}
                onClick={() => handleSceneClick(sId)}
                className="py-2 rounded-lg bg-white/5 hover:bg-accent-blue/20 hover:border-accent-blue/40 border border-white/5 font-mono text-xs text-slate-300 hover:text-white transition-all text-center"
              >
                {sId}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Contact Quick Links */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-accent-blue transition-colors"
          >
            {PERSONAL_INFO.email}
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-blue transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
