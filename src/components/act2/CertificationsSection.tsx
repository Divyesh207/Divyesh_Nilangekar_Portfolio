import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { Certificate } from '../../types';
import { ImageModal } from '../common/ImageModal';

export const CertificationsSection: React.FC = () => {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-accent-blue uppercase">
              05 · CREDENTIALS & CERTIFICATIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            VERIFIED INDUSTRY & ACADEMIC CERTIFICATES.
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl font-mono">
            Structured certifications across machine learning mathematics, generative AI, Python fundamentals, and software architecture.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="subtle-glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all group border border-white/10 hover:border-accent-blue/30"
            >
              {/* Top Image Preview */}
              <div
                onClick={() => setActiveCertificate(cert)}
                className="relative w-full aspect-[16/10] bg-[#06080d] overflow-hidden cursor-pointer"
              >
                <img
                  src={cert.imagePath}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <div className="font-mono text-xs text-white bg-black/80 border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-accent-blue" />
                    <span>ENLARGE CERTIFICATE</span>
                  </div>
                </div>
              </div>

              {/* Bottom Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-accent-blue tracking-widest uppercase font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="text-sm md:text-base font-bold text-white mb-3 line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setActiveCertificate(cert)}
                    className="font-mono text-xs text-accent-blue hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW FULL RESOLUTION</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {activeCertificate && (
        <ImageModal
          isOpen={!!activeCertificate}
          onClose={() => setActiveCertificate(null)}
          title={activeCertificate.title}
          images={[
            {
              url: activeCertificate.imagePath,
              caption: `${activeCertificate.title} — Issued by ${activeCertificate.issuer} (${activeCertificate.issueDate})`,
            },
          ]}
        />
      )}
    </section>
  );
};
