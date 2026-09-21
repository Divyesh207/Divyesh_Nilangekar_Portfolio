"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, ProjectItem } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import { ExternalLink, Eye, ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[#08080a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-mono text-sm">✦</span>
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
              Some Visuals
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            {PROJECTS.length} Selected Projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-[#0f1115] border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-black/70"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Overlay Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3 h-3 text-emerald-400" />
                  <span>Inspect</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                      {project.subtitle}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.03] text-zinc-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono text-zinc-500">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
