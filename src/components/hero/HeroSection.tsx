"use client";

import React from "react";

export function HeroSection() {
  const handleBeginJourney = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-background"
    >
      {/* Fullscreen Looping Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Hero Section Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px] max-w-7xl mx-auto w-full">
        <h1
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground"
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise{" "}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <button
          type="button"
          onClick={handleBeginJourney}
          className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] cursor-pointer transition-transform duration-200"
        >
          Begin Journey
        </button>
      </div>
    </section>
  );
}
