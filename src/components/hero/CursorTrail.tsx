"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
  rotation: number;
}

const TRAIL_IMAGES = [
  "/trail/trail-1.png",
  "/trail/trail-2.png",
  "/trail/trail-3.png",
  "/trail/trail-4.png",
  "/trail/trail-5.jpg",
  "/trail/trail-6.jpeg",
];

export function CursorTrail({ containerRef }: { containerRef?: React.RefObject<HTMLElement> }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<TrailItem[]>([]);
  const lastSpawnPos = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const trailId = useRef(0);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mq = window.matchMedia("(pointer: fine)");
    setIsDesktop(mq.matches);

    const updateMedia = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", updateMedia);

    return () => mq.removeEventListener("change", updateMedia);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPos({ x: clientX, y: clientY });

      // If containerRef is provided, check if mouse is within hero container
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInHero =
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom;

        if (!isInHero) return;
      }

      // Check distance moved since last thumbnail spawn (threshold: 75px)
      const dist = Math.hypot(clientX - lastSpawnPos.current.x, clientY - lastSpawnPos.current.y);
      if (dist > 75) {
        lastSpawnPos.current = { x: clientX, y: clientY };

        const currentImage = TRAIL_IMAGES[imageIndex.current % TRAIL_IMAGES.length];
        imageIndex.current += 1;

        const newTrail: TrailItem = {
          id: trailId.current++,
          x: clientX,
          y: clientY,
          image: currentImage,
          rotation: (Math.random() - 0.5) * 24, // random slight tilt
        };

        setTrails((prev) => [...prev.slice(-8), newTrail]); // keep at most 8 items

        // Auto remove after 900ms
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
        }, 900);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, containerRef]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Sleek Custom Dot Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: "10px",
          height: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 12px 2px rgba(255, 255, 255, 0.7)",
        }}
      />

      {/* Floating Thumbnail Trail in Hero Area */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {trails.map((t) => (
          <div
            key={t.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden border border-white/20 shadow-2xl transition-all duration-700 ease-out animate-in fade-in zoom-in-75"
            style={{
              left: `${t.x}px`,
              top: `${t.y}px`,
              width: "110px",
              height: "70px",
              transform: `translate(-50%, -50%) rotate(${t.rotation}deg)`,
              opacity: 0.9,
              animation: "trailFadeOut 0.9s forwards ease-in-out",
            }}
          >
            <div className="relative w-full h-full bg-[#12151c]">
              <Image
                src={t.image}
                alt="Project Thumbnail"
                fill
                sizes="110px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes trailFadeOut {
          0% {
            opacity: 0.95;
            transform: translate(-50%, -50%) scale(1);
          }
          70% {
            opacity: 0.7;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -40%) scale(0.75);
          }
        }
      `}</style>
    </>
  );
}
