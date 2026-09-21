// Design Tokens for Creative Developer Portfolio
// Easily customize colors, typography, and accents here

export const tokens = {
  colors: {
    background: "#08080a", // Deep obsidian void
    surface: "#0f1115",    // Dark card surface
    surfaceHover: "#161920", // Card hover state
    surfaceBorder: "rgba(255, 255, 255, 0.08)",
    surfaceBorderHover: "rgba(255, 255, 255, 0.2)",
    accent: {
      primary: "#ffffff",
      secondary: "#a1a1aa", // Zinc-400
      glow: "rgba(255, 255, 255, 0.12)",
      emerald: "#10b981",
      blue: "#3b82f6",
      indigo: "#6366f1",
      amber: "#f59e0b",
    },
    text: {
      primary: "#f4f4f5",   // Zinc-100
      secondary: "#a1a1aa", // Zinc-400
      muted: "#71717a",     // Zinc-500
      subtle: "#52525b",    // Zinc-600
    },
  },
  fonts: {
    sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
    display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
    mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
  },
  animation: {
    subtleEasing: [0.16, 1, 0.3, 1], // easeOutExpo
    springTransition: { type: "spring", stiffness: 260, damping: 20 },
  }
} as const;

export type DesignTokens = typeof tokens;
