"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX and clientY so the spotlight stays attached to the viewport cursor
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {/* 1. Dynamic Cursor-Follower Radial Spotlight */}
      <div
        className="absolute rounded-full transition-transform duration-75 ease-out"
        style={{
          width: "750px",
          height: "750px",
          left: `${mousePos.x - 375}px`,
          top: `${mousePos.y - 375}px`,
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.075) 0%, rgba(16, 185, 129, 0.04) 40%, rgba(12, 12, 12, 0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* 2. Secondary subtle pulse accent */}
      <div
        className="absolute rounded-full transition-transform duration-200 ease-out"
        style={{
          width: "350px",
          height: "350px",
          left: `${mousePos.x - 175}px`,
          top: `${mousePos.y - 175}px`,
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, rgba(56, 189, 248, 0.03) 50%, transparent 80%)",
          filter: "blur(25px)",
        }}
      />

      {/* 3. Subtle ambient background grid with cursor illumination */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
