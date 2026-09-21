"use client";

import React from "react";
import { EXPERIENCES } from "@/data/experience";
import { ExternalLink, Calendar, Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[#08080a]">
      <div className="max-w-5xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-zinc-500 font-mono text-sm">✦</span>
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
            My Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 md:pl-10 border-l border-zinc-800 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-zinc-600 group-hover:border-white transition-colors duration-300" />

              <div className="flex flex-col gap-3">
                {/* Header row: Role, Type badge, and Dates */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-100 font-display">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.dates}</span>
                  </div>
                </div>

                {/* Company Name & Link */}
                <div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>

                {/* Description (2-4 sentences) */}
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                {/* Skills used */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-white/[0.03] text-zinc-400 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
