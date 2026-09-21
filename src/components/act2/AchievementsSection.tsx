import React, { useState } from 'react';
import { Trophy, GraduationCap, BookOpen, ExternalLink, Eye } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { Achievement } from '../../types';
import { ImageModal } from '../common/ImageModal';

export const AchievementsSection: React.FC = () => {
  const [activeModalAchievement, setActiveModalAchievement] = useState<Achievement | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'competitive':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'academic':
        return <GraduationCap className="w-5 h-5 text-accent-blue" />;
      case 'publication':
        return <BookOpen className="w-5 h-5 text-accent-emerald" />;
      default:
        return <Trophy className="w-5 h-5 text-accent-blue" />;
    }
  };

  return (
    <section id="achievements" className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-accent-blue uppercase">
              04 · HONORS & ACHIEVEMENTS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            COMPETITIVE & ACADEMIC RECOGNITION.
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl font-mono">
            Documented competition victories, institutional academic distinctions, and peer-reviewed scientific publications.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS_DATA.map((item) => (
            <div
              key={item.id}
              className="subtle-glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between transition-all group relative overflow-hidden"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    {getIcon(item.type)}
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-accent-blue uppercase tracking-widest">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Metrics */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-slate-400 mb-4">
                  {item.subtitle}
                </p>

                {item.metrics && (
                  <div className="mb-4 inline-block font-mono text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-md">
                    {item.metrics}
                  </div>
                )}

                <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                {item.type === 'publication' ? (
                  <a
                    href="https://doi.org/10.58257/IJPREMS51878"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-blue hover:underline"
                  >
                    <span>{item.viewActionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveModalAchievement(item)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-blue hover:text-white bg-accent-blue/10 hover:bg-accent-blue/20 border border-accent-blue/30 px-3.5 py-1.5 rounded-lg transition-all active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{item.viewActionText}</span>
                  </button>
                )}
                <span className="font-mono text-[10px] text-slate-400">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox for Original Certificates & Marks */}
      {activeModalAchievement && (
        <ImageModal
          isOpen={!!activeModalAchievement}
          onClose={() => setActiveModalAchievement(null)}
          title={activeModalAchievement.title}
          images={[
            {
              url: activeModalAchievement.imagePath,
              caption: `${activeModalAchievement.title} — ${activeModalAchievement.organizer || activeModalAchievement.subtitle}`,
            },
          ]}
        />
      )}
    </section>
  );
};
