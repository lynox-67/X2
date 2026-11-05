import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#121214",
        surface: "#1c1c1f",
        raised: "#242428",
        line: "rgba(255,255,255,0.10)",
        ink: "#f5f5f7",
        muted: "#a1a1a6",
        accent: "#0a84ff",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      borderRadius: {
        DEFAULT: "12px",
        xl: "16px",
        "2xl": "20px",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(10,132,255,0.35), 0 18px 60px -20px rgba(10,132,255,0.55)",
        card: "0 24px 60px -30px rgba(0,0,0,0.9)",
      },
      maxWidth: {
        wrap: "1120px",
        wide: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
