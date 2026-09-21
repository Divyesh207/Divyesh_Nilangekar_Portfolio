"use client";

import React from "react";
import { EDUCATION_ITEMS } from "@/data/education";
import { GraduationCap, Calendar, ExternalLink } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[#08080a]">
      <div className="max-w-5xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-zinc-500 font-mono text-sm">✦</span>
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
            My Learning Curve
          </h2>
        </div>

        {/* Vertical Timeline matching Experience style */}
        <div className="relative pl-6 md:pl-10 border-l border-zinc-800 space-y-12">
          {EDUCATION_ITEMS.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-emerald-600/70 group-hover:border-emerald-400 transition-colors duration-300" />

              <div className="flex flex-col gap-3">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-100 font-display">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.dates}</span>
                  </div>
                </div>

                {/* Institution Name & Link */}
                <div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.institution}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="list-disc list-inside text-xs md:text-sm text-zinc-400 space-y-1">
                    {item.highlights.map((hl, idx) => (
                      <li key={idx} className="leading-normal">
                        {hl}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
