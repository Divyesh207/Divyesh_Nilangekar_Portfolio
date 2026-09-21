import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CinematicOverlaysProps {
  sceneId: number;
  sceneProgress: number; // 0.0 to 1.0
  onNavigateSection: (sectionId: string) => void;
}

export const CinematicOverlays: React.FC<CinematicOverlaysProps> = ({
  sceneId,
  sceneProgress,
  onNavigateSection,
}) => {
  // Helper to calculate smooth opacity based on progress window
  const getOpacity = (start: number, end: number, fadeDuration = 0.08): number => {
    if (sceneProgress < start || sceneProgress > end) return 0;
    // If starting at 0.0, it is fully visible right away without initial fade-in delay
    if (start === 0) {
      if (sceneProgress > end - fadeDuration) {
        return Math.max(0, (end - sceneProgress) / fadeDuration);
      }
      return 1;
    }
    if (sceneProgress < start + fadeDuration) {
      return Math.min(1, (sceneProgress - start) / fadeDuration);
    }
    if (sceneProgress > end - fadeDuration) {
      return Math.max(0, (end - sceneProgress) / fadeDuration);
    }
    return 1;
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center p-6 md:p-12">
      {/* ================= SCENE 1 ================= */}
      {sceneId === 1 && (
        <>
          {/* Overlay 1: Name & Role */}
          <div
            style={{ opacity: getOpacity(0.0, 0.45, 0.05) }}
            className="flex flex-col items-center text-center transition-all duration-300 max-w-2xl"
          >
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-blue uppercase mb-3 px-3 py-1 rounded-full border border-accent-blue/20 bg-accent-blue/5">
              Portfolio
            </span>
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-3 text-illumination">
              DIVYESH NILANGEKAR
            </h1>
            <p className="font-mono text-xs md:text-sm tracking-widest text-slate-300 uppercase">
              AI/ML ENGINEER · BUILDER · PRODUCT THINKER
            </p>
          </div>

          {/* Overlay 2: Statement */}
          <div
            style={{ opacity: getOpacity(0.50, 0.88) }}
            className="absolute bottom-20 md:bottom-28 flex flex-col items-center text-center transition-all duration-300"
          >
            <h2 className="text-xl md:text-3xl font-medium tracking-wide text-white/90">
              I TURN IDEAS INTO PRODUCTS.
            </h2>
          </div>
        </>
      )}

      {/* ================= SCENE 2 ================= */}
      {sceneId === 2 && (
        <div
          style={{ opacity: getOpacity(0.18, 0.82) }}
          className="flex flex-col items-center text-center transition-all duration-300"
        >
          <div className="inline-flex items-center gap-2 md:gap-4 font-mono text-xs md:text-base tracking-[0.2em] text-slate-200 uppercase bg-black/60 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md">
            <span>PROBLEM</span>
            <span className="text-accent-blue font-bold">→</span>
            <span>CODE</span>
            <span className="text-accent-blue font-bold">→</span>
            <span className="text-accent-emerald font-semibold">PRODUCT</span>
          </div>
        </div>
      )}

      {/* ================= SCENE 3 (CashBuddy) ================= */}
      {sceneId === 3 && (
        <div
          style={{ opacity: getOpacity(0.30, 0.95) }}
          className="absolute bottom-12 left-6 md:bottom-16 md:left-16 max-w-lg transition-all duration-300"
        >
          <div className="subtle-glass p-5 md:p-7 rounded-2xl">
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-emerald-400 uppercase font-semibold block mb-1">
              FEATURED PRODUCT · 01
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">
              CASHBUDDY
            </h2>
            <p className="font-mono text-xs text-accent-blue tracking-wide uppercase mb-2">
              AI-POWERED PERSONAL FINANCE
            </p>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
              A privacy-focused platform for smarter money management with automated Magic Import.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {["React", "TypeScript", "FastAPI", "PostgreSQL", "Python"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] md:text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => onNavigateSection('cashbuddy')}
              className="pointer-events-auto inline-flex items-center gap-2 font-mono text-xs text-white bg-accent-blue/20 hover:bg-accent-blue/30 border border-accent-blue/40 px-4 py-2 rounded-lg transition-all duration-200 active:scale-95"
            >
              <span>EXPLORE PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-blue" />
            </button>
          </div>
        </div>
      )}

      {/* ================= SCENE 4 (EduFlow) ================= */}
      {sceneId === 4 && (
        <div
          style={{ opacity: getOpacity(0.30, 0.95) }}
          className="absolute bottom-12 right-6 md:bottom-16 md:right-16 max-w-lg transition-all duration-300"
        >
          <div className="subtle-glass p-5 md:p-7 rounded-2xl">
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-indigo-400 uppercase font-semibold block mb-1">
              FEATURED PRODUCT · 02
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">
              EDUFLOW
            </h2>
            <p className="font-mono text-xs text-indigo-300 tracking-wide uppercase mb-2">
              ACADEMIC MANAGEMENT PLATFORM
            </p>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
              Connecting students, teachers and academic workflows with institutional health scoring.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {["React", "Python", "FastAPI", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] md:text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => onNavigateSection('eduflow')}
              className="pointer-events-auto inline-flex items-center gap-2 font-mono text-xs text-white bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 px-4 py-2 rounded-lg transition-all duration-200 active:scale-95"
            >
              <span>EXPLORE PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>
        </div>
      )}

      {/* ================= SCENE 5 ================= */}
      {sceneId === 5 && (
        <div
          style={{ opacity: getOpacity(0.12, 0.90) }}
          className="flex flex-col items-center text-center transition-all duration-300 max-w-xl"
        >
          <h2 className="text-xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            THE INTERFACE IS ONLY THE SURFACE.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 w-full">
            {[
              { label: "FRONTEND", delay: 0.20 },
              { label: "API", delay: 0.35 },
              { label: "BACKEND", delay: 0.50 },
              { label: "DATABASE", delay: 0.65 },
            ].map((node) => {
              const nodeOpacity = sceneProgress >= node.delay ? 1 : 0.2;
              return (
                <div
                  key={node.label}
                  style={{ opacity: nodeOpacity }}
                  className="p-3 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md transition-opacity duration-300 text-center"
                >
                  <span className="font-mono text-xs md:text-sm font-medium tracking-widest text-slate-200">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= SCENE 6 ================= */}
      {sceneId === 6 && (
        <div className="flex flex-col items-center text-center transition-all duration-300 max-w-2xl">
          {sceneProgress < 0.70 && (
            <div
              style={{ opacity: getOpacity(0.15, 0.68) }}
              className="flex flex-col items-center gap-3 w-full"
            >
              <span className="font-mono text-xs tracking-widest text-accent-blue uppercase">
                ENGINEERING DEPTH
              </span>
              <div className="flex flex-wrap justify-center gap-2.5 max-w-lg">
                {[
                  "PYTHON",
                  "FASTAPI · REST APIs",
                  "POSTGRESQL · SQL",
                  "DATA · MACHINE LEARNING",
                  "REACT · FRONTEND",
                ].map((item, idx) => {
                  const itemProgressThreshold = 0.15 + idx * 0.09;
                  const itemOpacity = sceneProgress >= itemProgressThreshold ? 1 : 0.15;
                  return (
                    <div
                      key={item}
                      style={{ opacity: itemOpacity }}
                      className="font-mono text-xs md:text-sm px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 text-slate-200 backdrop-blur-md transition-all duration-300"
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {sceneProgress >= 0.70 && (
            <div
              style={{ opacity: getOpacity(0.70, 0.98) }}
              className="flex flex-col items-center text-center"
            >
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">
                FROM IDEA TO DEPLOYED PRODUCT.
              </h2>
            </div>
          )}
        </div>
      )}

      {/* ================= SCENE 7 ================= */}
      {sceneId === 7 && (
        <>
          {/* Phase A: Tagline */}
          {sceneProgress < 0.40 && (
            <div
              style={{ opacity: getOpacity(0.05, 0.38) }}
              className="flex flex-col items-center text-center transition-all duration-300"
            >
              <h2 className="text-xl md:text-3xl font-medium tracking-wider text-slate-200 uppercase font-mono">
                THE PERSON BEHIND THE SYSTEM.
              </h2>
            </div>
          )}

          {/* Phase B: Divyesh Identity */}
          {sceneProgress >= 0.38 && sceneProgress < 0.72 && (
            <div
              style={{ opacity: getOpacity(0.40, 0.70) }}
              className="flex flex-col items-center text-center transition-all duration-300"
            >
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-2">
                DIVYESH NILANGEKAR
              </h1>
              <p className="font-mono text-xs md:text-sm tracking-widest text-slate-300 uppercase">
                AI/ML ENGINEER · BUILDER · PRODUCT THINKER
              </p>
            </div>
          )}

          {/* Phase C: Final Hero Statement & CTAs */}
          {sceneProgress >= 0.70 && (
            <div
              style={{ opacity: getOpacity(0.72, 0.98) }}
              className="flex flex-col items-center text-center transition-all duration-300 max-w-xl"
            >
              <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white mb-6">
                I BUILD THINGS WORTH EXPLORING.
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  onClick={() => onNavigateSection('projects')}
                  className="pointer-events-auto inline-flex items-center justify-center gap-2 font-mono text-xs md:text-sm text-white bg-accent-blue/20 hover:bg-accent-blue/30 border border-accent-blue/50 px-6 py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg shadow-accent-blue/10"
                >
                  <span>EXPLORE MY WORK</span>
                  <ArrowRight className="w-4 h-4 text-accent-blue" />
                </button>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="pointer-events-auto inline-flex items-center justify-center gap-2 font-mono text-xs md:text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-lg transition-all duration-200 active:scale-95"
                >
                  <span>LET'S CONNECT</span>
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
