"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  X,
  History,
  ChevronRight,
  ChevronLeft,
  Footprints,
  Compass,
  MessageCircle,
} from "lucide-react";
import { getPippoThought } from "@/data/pippoKnowledge";
import { Pippo3DViewer } from "./Pippo3DViewer";

interface StoredThought {
  id: string;
  query: string;
  sentences: string[];
  timestamp: string;
}

export function PippoChatbot() {
  // Mode: 'intro' (landing modal with video and dual options) -> 'roaming' (living inside site) -> 'chatting' (focused interaction)
  const [mode, setMode] = useState<"intro" | "roaming" | "chatting">("intro");

  // Walking system with corner pauses
  const [posX, setPosX] = useState(76); // percentage across screen width (from 16% to 84%)
  const [walkDirection, setWalkDirection] = useState<-1 | 1>(-1); // -1 left, 1 right
  const [isWalking, setIsWalking] = useState(false);
  const [isLookingAround, setIsLookingAround] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Video state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFinished, setVideoFinished] = useState(false);

  // Thought state
  const [query, setQuery] = useState("");
  const [currentThoughtSentences, setCurrentThoughtSentences] = useState<string[]>([
    "Hi, I am Pippo! 👋",
    "I live right here inside Divyesh's portfolio!",
    "How can I help you explore his work today?",
  ]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isThinking, setIsThinking] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [storedThoughts, setStoredThoughts] = useState<StoredThought[]>([
    {
      id: "init-1",
      query: "Welcome",
      sentences: [
        "Hi, I am Pippo! 👋",
        "I live right here inside Divyesh's portfolio!",
        "How can I help you explore his work today?",
      ],
      timestamp: "Just now",
    },
  ]);

  // Video finish callback
  const handleVideoEnded = () => {
    setVideoFinished(true);
  };

  // Direct actions: Chat with Pippo vs View Portfolio
  const handleStartChat = () => {
    setMode("chatting");
    setIsWalking(false);
    setIsLookingAround(false);
  };

  const handleViewPortfolio = () => {
    setMode("roaming");
    setIsWalking(true);
    setIsLookingAround(false);
  };

  // Walking loop with pauses at the corners to look around
  useEffect(() => {
    if (mode !== "roaming" || isHovered) {
      setIsWalking(false);
      return;
    }

    // Corner pause handler
    if (isLookingAround) {
      setIsWalking(false);
      const pauseTimer = setTimeout(() => {
        setIsLookingAround(false);
        setIsWalking(true);
      }, 4500); // Stop at corner for 4.5 seconds to look around
      return () => clearTimeout(pauseTimer);
    }

    setIsWalking(true);
    const walkInterval = setInterval(() => {
      setPosX((prev) => {
        const step = walkDirection * 0.42;
        const next = prev + step;

        // Reach left corner
        if (next <= 16) {
          setWalkDirection(1);
          setIsLookingAround(true);
          return 16;
        }

        // Reach right corner
        if (next >= 84) {
          setWalkDirection(-1);
          setIsLookingAround(true);
          return 84;
        }

        return next;
      });
    }, 60);

    return () => clearInterval(walkInterval);
  }, [mode, walkDirection, isHovered, isLookingAround]);

  // Auto progression of thought sentences
  useEffect(() => {
    if (currentThoughtSentences.length <= 1) return;

    const timer = setTimeout(() => {
      setSentenceIndex((prev) => {
        if (prev < currentThoughtSentences.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 4200);

    return () => clearTimeout(timer);
  }, [sentenceIndex, currentThoughtSentences]);

  // When user clicks on Pippo: he stops and opens his thought cloud
  const handlePippoClick = () => {
    setIsWalking(false);
    setIsLookingAround(false);
    setMode("chatting");
    setSentenceIndex(0);
  };

  // Submit query to Pippo
  const handleQuerySubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim() || isThinking) return;

    const userQuestion = query.trim();
    setQuery("");
    setIsThinking(true);

    setTimeout(() => {
      const response = getPippoThought(userQuestion);
      setCurrentThoughtSentences(response.sentences);
      setSentenceIndex(0);
      setIsThinking(false);

      const newThought: StoredThought = {
        id: Math.random().toString(36).substring(2, 9),
        query: userQuestion,
        sentences: response.sentences,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setStoredThoughts((prev) => [newThought, ...prev]);
    }, 500);
  };

  const handleQuickChip = (prompt: string) => {
    setQuery(prompt);
    setIsThinking(true);
    setTimeout(() => {
      const response = getPippoThought(prompt);
      setCurrentThoughtSentences(response.sentences);
      setSentenceIndex(0);
      setIsThinking(false);

      const newThought: StoredThought = {
        id: Math.random().toString(36).substring(2, 9),
        query: prompt,
        sentences: response.sentences,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setStoredThoughts((prev) => [newThought, ...prev]);
    }, 500);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. INTRO MODAL: Landing video with DUAL OPTIONS (Chat vs View Portfolio)  */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {mode === "intro" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4"
          >
            <div className="relative max-w-lg w-full rounded-3xl overflow-hidden bg-[#0C0C0C] border border-white/10 shadow-2xl p-3 flex flex-col items-center">
              {/* Landing Video */}
              <div className="relative w-full rounded-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  src="/videos/robot_landing.mp4"
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                  className="w-full h-auto max-h-[55vh] object-cover"
                />

                {/* Status indicator over video */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{videoFinished ? "Pippo has landed!" : "Pippo is dropping in..."}</span>
                </div>
              </div>

              {/* DUAL OPTIONS SIDE-BY-SIDE (Available immediately or when video finishes) */}
              <div className="w-full mt-4 p-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleStartChat}
                  className="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Pippo</span>
                </button>

                <button
                  type="button"
                  onClick={handleViewPortfolio}
                  className="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-zinc-200 font-medium text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>View Portfolio ➔</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 2. LIVING PIPPO: Free-standing 3D companion walking inside the portfolio  */}
      {/*    (Reduced compact size, blinking eyes, corner pauses looking around)     */}
      {/* ========================================================================= */}
      <div
        className="fixed bottom-0 z-40 pointer-events-none transition-all duration-300 ease-out select-none"
        style={{
          left: `${posX}%`,
          transform: "translateX(-50%)",
        }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative pointer-events-auto flex flex-col items-center"
        >
          {/* A. THOUGHT CLOUD BUBBLE (Floats directly above Pippo's head) */}
          <AnimatePresence>
            {(mode === "chatting" || isHovered) && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative mb-2 flex flex-col items-center w-[92vw] sm:w-[360px] md:w-[400px]"
              >
                {/* Organic Thought Cloud Container */}
                <div className="thought-cloud w-full p-4 sm:p-5 text-zinc-100 flex flex-col justify-between relative">
                  {/* Header: Pippo Thought Status */}
                  <div className="flex items-center justify-between mb-2.5 border-b border-white/10 pb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                        {isThinking ? "Pippo is formulating thoughts..." : "Pippo's Thought"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full">
                        {sentenceIndex + 1} / {currentThoughtSentences.length}
                      </span>
                      {mode === "chatting" && (
                        <button
                          type="button"
                          onClick={() => {
                            setMode("roaming");
                            setIsWalking(true);
                          }}
                          className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                          title="Let Pippo resume stroll"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Sequential Sentence Thoughts */}
                  <div className="min-h-[58px] flex items-center justify-center text-center px-2 py-1">
                    <AnimatePresence mode="wait">
                      {isThinking ? (
                        <motion.div
                          key="thinking"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 text-xs sm:text-sm text-cyan-300 font-mono"
                        >
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                          <span className="ml-1">Connecting thoughts...</span>
                        </motion.div>
                      ) : (
                        <motion.p
                          key={sentenceIndex}
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.25 }}
                          className="text-xs sm:text-sm font-normal text-zinc-100 leading-relaxed font-sans"
                        >
                          {currentThoughtSentences[sentenceIndex]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Stepper Controls & "Missed the thought?" */}
                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/10 text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        disabled={sentenceIndex === 0 || isThinking}
                        onClick={() => setSentenceIndex((prev) => Math.max(0, prev - 1))}
                        className="p-1 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        disabled={sentenceIndex >= currentThoughtSentences.length - 1 || isThinking}
                        onClick={() => setSentenceIndex((prev) => prev + 1)}
                        className="p-1 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowHistory(!showHistory)}
                      className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 text-xs font-medium transition-colors flex items-center gap-1"
                    >
                      <span>Missed the thought? Here it is stored</span>
                      <History className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Comic Thought Bubble Trail leading from Pippo's head up to the cloud */}
                <div className="flex flex-col items-center gap-1.5 my-1 pointer-events-none">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#121620] border border-cyan-400/40 shadow-sm" />
                  <span className="w-2 h-2 rounded-full bg-[#121620] border border-cyan-400/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#121620] border border-cyan-400/40" />
                </div>

                {/* Stored Thought Memory Drawer */}
                <AnimatePresence>
                  {showHistory && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="w-full mt-2 p-3.5 rounded-2xl bg-[#0e121a]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl overflow-hidden max-h-52 overflow-y-auto text-left"
                    >
                      <div className="flex items-center justify-between mb-2.5 border-b border-white/10 pb-1.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-1.5">
                          <History className="w-3.5 h-3.5" />
                          Stored Thought Memory
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {storedThoughts.length} logs
                        </span>
                      </div>

                      <div className="flex flex-col gap-2">
                        {storedThoughts.map((t) => (
                          <div
                            key={t.id}
                            className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs flex flex-col gap-1"
                          >
                            <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
                              <span className="text-cyan-400 font-semibold">&ldquo;{t.query}&rdquo;</span>
                              <span>{t.timestamp}</span>
                            </div>
                            <p className="text-zinc-200 leading-relaxed font-light text-[11px]">
                              {t.sentences.join(" ")}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* B. THE ACTUAL 3D PIPPO MODEL (Refined compact size, blinking eyes, NO box!) */}
          <div
            onClick={handlePippoClick}
            className="relative cursor-pointer group flex flex-col items-center"
            title="Click Pippo to chat or ask questions!"
          >
            {/* Soft ground contact shadow */}
            <div className="absolute -bottom-1 w-20 sm:w-28 h-4 bg-black/60 blur-sm rounded-full pointer-events-none" />

            {/* 3D WebGL Viewer - Mobile size kept as is, Desktop size increased a little bit */}
            <div className="w-[125px] h-[140px] sm:w-[160px] sm:h-[180px] md:w-[175px] md:h-[195px] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Pippo3DViewer
                className="w-full h-full"
                isWalking={isWalking}
                isLookingAround={isLookingAround}
                walkDirection={walkDirection}
                enableFloating={!isWalking && !isLookingAround}
                scaleMultiplier={0.96}
              />
            </div>

            {/* Corner look-around / strolling status badge */}
            <div className="absolute -bottom-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#121620]/90 border border-cyan-400/30 text-[9px] font-mono text-cyan-300 backdrop-blur-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                {isLookingAround
                  ? "Pippo is inspecting the site..."
                  : isWalking
                  ? "Pippo is strolling... Click to chat!"
                  : "Click Pippo to chat!"}
              </span>
            </div>
          </div>

          {/* C. MINIMALIST TYPING LINE (Only visible when chatting) */}
          <AnimatePresence>
            {mode === "chatting" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="w-[92vw] sm:w-[360px] md:w-[400px] mt-2 flex flex-col gap-2 pointer-events-auto"
              >
                {/* Quick prompt chips */}
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 justify-center">
                  {["CashBuddy", "Skills & Stack", "UWACI Lead", "AI Screener", "Contact"].map(
                    (chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => handleQuickChip(chip)}
                        className="px-2.5 py-1 rounded-full bg-[#121620]/90 hover:bg-cyan-500/20 hover:border-cyan-400/40 border border-white/10 text-[11px] font-mono text-zinc-300 hover:text-cyan-300 whitespace-nowrap transition-colors"
                      >
                        {chip}
                      </button>
                    )
                  )}
                </div>

                {/* Minimalist prompt input form */}
                <form
                  onSubmit={handleQuerySubmit}
                  className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#121620]/95 border border-cyan-500/40 shadow-2xl backdrop-blur-xl"
                >
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask Pippo about Divyesh..."
                    className="flex-1 bg-transparent px-3 py-1.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!query.trim() || isThinking}
                    className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:pointer-events-none text-zinc-950 font-semibold shadow-[0_0_15px_#38bdf8] transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                {/* Stroll resume button */}
                <div className="flex justify-center mt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMode("roaming");
                      setIsWalking(true);
                    }}
                    className="text-[11px] font-mono text-zinc-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                  >
                    <Footprints className="w-3 h-3" />
                    <span>Let Pippo resume strolling the site ➔</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
