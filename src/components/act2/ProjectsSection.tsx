import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle2, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { Project } from '../../types';
import { ImageModal } from '../common/ImageModal';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.category === 'Featured');
  const supportingProjects = PROJECTS_DATA.filter((p) => p.category === 'Supporting');

  return (
    <section id="projects" className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-accent-blue uppercase">
                02 · FEATURED WORK & CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              PRODUCTS BUILT FROM THE GROUND UP.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Production-ready architectures, intelligent workflows, and real-world deployed platforms.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="flex flex-col gap-24 mb-24">
          {featuredProjects.map((project, index) => {
            const coverImage = project.screenshots.find((s) => s.isCover) || project.screenshots[0];

            return (
              <div
                key={project.id}
                id={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#0a0f1a] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
              >
                {/* Left / Top: Interactive Screenshot Showcase */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#07090e] cursor-pointer group shadow-xl aspect-[16/9]"
                  >
                    {coverImage && (
                      <img
                        src={coverImage.url}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transform group-hover:scale-103 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <div className="font-mono text-xs text-white bg-black/80 border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-accent-blue" />
                        <span>VIEW GALLERY ({project.screenshots.length} SCREENSHOTS)</span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-5 gap-2.5">
                    {project.screenshots.slice(1, 6).map((shot) => (
                      <button
                        key={shot.url}
                        onClick={() => setActiveModalProject(project)}
                        className="rounded-lg overflow-hidden border border-white/10 hover:border-accent-blue/50 aspect-[16/9] opacity-75 hover:opacity-100 transition-all"
                        title={shot.caption}
                      >
                        <img src={shot.url} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right / Bottom: Detailed Case Study Narrative */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-semibold tracking-wider text-accent-blue uppercase">
                        CASE STUDY 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-slate-400 uppercase tracking-wide mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest block mb-2 font-semibold">
                        VERIFIED CAPABILITIES
                      </span>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {project.features.slice(0, 5).map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] md:text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-white bg-accent-blue/20 hover:bg-accent-blue/30 border border-accent-blue/40 px-4 py-2.5 rounded-lg transition-all active:scale-95"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="w-3.5 h-3.5 text-accent-blue" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-lg transition-all active:scale-95"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white transition-colors ml-auto"
                    >
                      <span>ALL SCREENSHOTS</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Supporting Projects */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs text-slate-400 tracking-wider uppercase font-semibold">
              SUPPORTING & SPECIALIZED PROJECTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportingProjects.map((proj) => (
              <div
                key={proj.id}
                className="subtle-glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-accent-blue tracking-widest uppercase font-semibold block mb-1">
                    {proj.subtitle}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">{proj.title}</h4>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {proj.githubUrl && (
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-accent-blue" />
                      <span>VIEW ON GITHUB</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Screenshot Modal */}
      {activeModalProject && (
        <ImageModal
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          title={`${activeModalProject.title} — Screenshots`}
          images={activeModalProject.screenshots}
        />
      )}
    </section>
  );
};
