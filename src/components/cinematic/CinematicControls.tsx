import React from 'react';
import { ChevronDown, FastForward, Menu } from 'lucide-react';

interface CinematicControlsProps {
  activeScene: number;
  totalScenes?: number;
  globalProgress: number; // 0.0 to 1.0
  onSkipToPortfolio: () => void;
  onJumpToScene: (sceneId: number) => void;
  onOpenMenu: () => void;
}

export const CinematicControls: React.FC<CinematicControlsProps> = ({
  activeScene,
  totalScenes = 7,
  globalProgress,
  onSkipToPortfolio,
  onJumpToScene,
  onOpenMenu,
}) => {
  const showScrollHint = globalProgress < 0.025;

  return (
    <>
      {/* Top Bar Header */}
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5 md:px-10 pointer-events-none">
        {/* Left Monogram / Branding */}
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center backdrop-blur-md">
            <span className="font-mono text-xs font-bold text-accent-blue">DN</span>
          </div>
          <span className="font-mono text-xs tracking-[0.2em] font-semibold text-white/90 hidden sm:inline-block">
            DIVYESH
          </span>
        </div>

        {/* Right Actions */}
        <div className="pointer-events-auto flex items-center gap-3">
          {/* Skip to Portfolio Button */}
          <button
            onClick={onSkipToPortfolio}
            className="flex items-center gap-2 font-mono text-[11px] md:text-xs text-slate-300 hover:text-white bg-black/50 hover:bg-black/80 border border-white/10 hover:border-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all duration-200 active:scale-95"
            title="Skip directly to portfolio"
          >
            <span>SKIP TO PORTFOLIO</span>
            <FastForward className="w-3.5 h-3.5 text-accent-blue" />
          </button>

          {/* Menu Trigger */}
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="p-2 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white backdrop-blur-md transition-all duration-200 active:scale-95"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Bottom Center "SCROLL TO BEGIN" Pulsing Prompt */}
      {showScrollHint && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-2 transition-opacity duration-500 animate-pulse">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-slate-300 uppercase">
            SCROLL TO BEGIN
          </span>
          <ChevronDown className="w-4 h-4 text-accent-blue animate-bounce" />
        </div>
      )}

      {/* Right-Side Scene Jump Indicators */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-auto hidden md:flex flex-col items-center gap-2 bg-black/40 border border-white/5 p-2 rounded-full backdrop-blur-md">
        {Array.from({ length: totalScenes }, (_, i) => i + 1).map((sId) => {
          const isActive = sId === activeScene;
          return (
            <button
              key={sId}
              onClick={() => onJumpToScene(sId)}
              title={`Jump to Scene ${sId}`}
              className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] transition-all duration-200 ${
                isActive
                  ? 'bg-accent-blue text-black font-bold scale-110 shadow-md shadow-accent-blue/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {sId}
            </button>
          );
        })}
      </div>

      {/* Bottom Global Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-0.5 z-30 pointer-events-none bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-accent-blue to-accent-indigo transition-all duration-75"
          style={{ width: `${Math.min(100, Math.max(0, globalProgress * 100))}%` }}
        />
      </div>
    </>
  );
};
