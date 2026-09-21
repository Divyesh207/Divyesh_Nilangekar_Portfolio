import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Large Headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-accent-blue uppercase">
                07 · GET IN TOUCH
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-none">
              LET'S BUILD<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-indigo-400 to-white">
                SOMETHING USEFUL.
              </span>
            </h2>

            <p className="text-base md:text-xl text-slate-300 max-w-xl leading-relaxed mb-8">
              Have an idea, project, opportunity, or just want to talk? Feel free to reach out directly.
            </p>

            {/* Quick Email Copy Pill */}
            <div className="inline-flex items-center gap-3 p-2 pr-4 rounded-xl bg-white/5 border border-white/10">
              <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs md:text-sm text-slate-200">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Right Direct Action Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Action */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="subtle-glass p-6 rounded-2xl flex items-center justify-between group transition-all hover:border-accent-blue/40"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-0.5">EMAIL ME</h4>
                  <p className="font-mono text-xs text-slate-400">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* LinkedIn Action */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="subtle-glass p-6 rounded-2xl flex items-center justify-between group transition-all hover:border-indigo-400/40"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-0.5">LINKEDIN</h4>
                  <p className="font-mono text-xs text-slate-400">linkedin.com/in/divyesh-nilangekar</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Action */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="subtle-glass p-6 rounded-2xl flex items-center justify-between group transition-all hover:border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-slate-200 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-0.5">GITHUB</h4>
                  <p className="font-mono text-xs text-slate-400">github.com/Divyesh207</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
