"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ children, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none pointer-events-none">{children}</span>
      <motion.span style={{ opacity } as any} className="absolute inset-0">
        {children}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const elementRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const totalChars = text.length;
  let charCount = 0;

  return (
    <p
      ref={elementRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto text-[clamp(1rem,2vw,1.35rem)] ${className}`}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        const startCharIdx = charCount;
        charCount += wordChars.length + 1; // including space

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((c, cIdx) => {
              const globalIdx = startCharIdx + cIdx;
              const start = globalIdx / totalChars;
              const end = Math.min(1, start + 1.5 / totalChars);

              return (
                <Char
                  key={cIdx}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {c}
                </Char>
              );
            })}
            {wordIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </p>
  );
}
