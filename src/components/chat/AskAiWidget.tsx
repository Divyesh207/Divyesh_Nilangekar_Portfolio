"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "@/data/personal";
import { X, Send, Bot, User, Sparkles, Loader2 } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function AskAiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: `Hello! I'm ${PERSONAL_INFO.name}'s AI assistant. Ask me about his machine learning projects (CashBuddy, EduFlow), tech stack, experience, or education!`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const newMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        throw new Error("Failed to get response");
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Sorry, I couldn't process that." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I ran into an issue connecting to the AI service. You can contact Divyesh directly at " +
            PERSONAL_INFO.email,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    "Tell me about CashBuddy & the research paper",
    "What is Divyesh's background & education?",
    "What technologies does he specialize in?",
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-none">
      {/* Expanded Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto w-[92vw] sm:w-96 h-[460px] max-h-[75vh] mb-3 rounded-2xl bg-[#0f1115]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Ask {PERSONAL_INFO.name}&apos;s AI</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Powered by portfolio context</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                className="p-1 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      m.role === "user"
                        ? "bg-white text-zinc-950 font-medium rounded-br-sm"
                        : "bg-[#181b22] text-zinc-200 border border-white/5 rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                  {m.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-zinc-400 text-xs pl-8">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                  <span>Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Starter Chips */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-white/5 bg-black/20">
                {sampleQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-[10px] text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-2.5 py-1 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white/[0.02] border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Divyesh..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors"
              >
              </input>
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-black transition-all"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group flex items-center gap-2.5 px-4 py-2.5 sm:py-3 rounded-full bg-[#0f1115] hover:bg-[#181b22] border border-white/15 hover:border-emerald-400/50 text-white shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <span className="text-xs font-medium tracking-wide">
          {isOpen ? "Close Assistant" : `Ask ${PERSONAL_INFO.name}'s AI`}
        </span>
      </button>
    </div>
  );
}
