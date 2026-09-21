import React from 'react';
import { FileDown, ExternalLink, FileCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-[#090e18] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="subtle-glass p-8 md:p-12 rounded-3xl border border-accent-blue/20 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-indigo/5">
          <div className="flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue flex-shrink-0">
              <FileCheck className="w-8 h-8" />
            </div>
            <div>
              <span className="font-mono text-xs text-accent-blue tracking-widest uppercase font-semibold block mb-1">
                CURRICULUM VITAE
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                DETAILED RESUME & CREDENTIALS
              </h3>
              <p className="text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed">
                Download the verified resume documenting full technical skills, backend architectures, machine learning models, research publication, and academic achievements.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 w-full md:w-auto">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Divyesh_Nilangekar_Resume.pdf"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 font-mono text-xs md:text-sm text-white bg-accent-blue/20 hover:bg-accent-blue/30 border border-accent-blue/40 px-6 py-3.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-accent-blue/10"
            >
              <FileDown className="w-4 h-4 text-accent-blue" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 font-mono text-xs md:text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3.5 rounded-xl transition-all"
            >
              <span>PREVIEW</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
