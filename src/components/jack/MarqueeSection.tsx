"use client";

import React, { useRef, useState, useEffect } from "react";

const ROW_1_IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const ROW_2_IMAGES = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

// Tripled lists for continuous seamless scrolling
const ROW_1_TRIPLED = [...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES];
const ROW_2_TRIPLED = [...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const calculatedOffset =
              (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(calculatedOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll (translateX(offset - 200)) */}
        <div
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
          className="flex gap-3 w-max"
        >
          {ROW_1_TRIPLED.map((src, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="3D Project Preview"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll (translateX(-(offset - 200))) */}
        <div
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform",
          }}
          className="flex gap-3 w-max"
        >
          {ROW_2_TRIPLED.map((src, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="3D Project Preview"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
