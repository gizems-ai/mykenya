import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MyKenya — Classic Kenya palette
        cream: "#FDFBF6",
        paper: "#F7F2E6",
        sand: "#E2D2AE",
        kgreen: "#1B5E3F",
        kred: "#C8302C",
        ink: "#0F0F0E",
        ksky: "#7BCEEA",
        blush: "#E8B4A0",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
