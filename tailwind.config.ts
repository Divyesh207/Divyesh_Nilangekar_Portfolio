import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        foreground: "#D7E2EA",
      },
      fontFamily: {
        sans: ["Kanit", "var(--font-kanit)", "system-ui", "-apple-system", "sans-serif"],
        kanit: ["Kanit", "var(--font-kanit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
