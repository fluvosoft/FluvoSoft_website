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
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        "foreground-muted": "#E0E0E0",
        primary: "#1A1A1A",
        "primary-button": "#F0F0F0",
        "primary-button-foreground": "#1A1A1A",
        "secondary-button": "#333333",
        muted: "#71717A",
        accent: "#B0B0B0",
        "accent-dark": "#A0A0A0",
        "banner-bg": "#2C2C2C",
        "dashboard-bg": "#0a0a0c",
        "dashboard-card": "#282828",
        "dashboard-title": "#C0C0C0",
        "tab-active-bg": "#D0D0D0",
        "tab-active-text": "#1A1A1A",
        "chart-bar": "#3A3A3A",
        brand: "#FB923C",
        "brand-foreground": "#FDBA74",
        cta: "#FF6B3E",
        positive: "#4CAF50",
        border: "rgba(250, 250, 250, 0.1)",
      },
      fontSize: {
        "hero": ["3.25rem", { lineHeight: "1.15" }],
        "hero-lg": ["3.75rem", { lineHeight: "1.15" }],
      },
      borderRadius: {
        "dashboard": "1rem",
      },
      boxShadow: {
        "dashboard": "0 28px 56px -14px rgba(0, 0, 0, 0.55), 0 14px 32px -10px rgba(0, 0, 0, 0.45), 0 4px 12px -4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1312px",
        "container-sm": "720px",
      },
      keyframes: {
        "dashboard-enter": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "card-enter": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bar-grow": {
          "0%": { transform: "scaleY(0)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", transformOrigin: "bottom" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "globe-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "dashboard-enter": "dashboard-enter 0.6s ease-out forwards",
        "card-enter": "card-enter 0.5s ease-out forwards",
        "bar-grow": "bar-grow 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "globe-spin": "globe-spin 24s linear infinite",
      },
      transitionDuration: {
        200: "200ms",
        300: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
