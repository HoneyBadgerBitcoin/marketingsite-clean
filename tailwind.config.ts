import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Fjalla One", "sans-serif"],
        gulams: ["Gulams Condensed", "sans-serif"],
        balinese: ["Balinese Culture", "sans-serif"],
        condensed: ["Condensed Neue Soft", "sans-serif"],
        dacht: ["Dacht", "sans-serif"],
        falgard: ["Falgard", "sans-serif"],
        gendar: ["Gendar", "sans-serif"],
        granika: ["Granika", "sans-serif"],
        marvelous: ["Marvelous", "sans-serif"],
        neohead: ["Neohead", "sans-serif"],
        bondia: ["Bondia", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fffef7",
          100: "#fffbeb",
          200: "#fef3c7",
          300: "#fde68a",
          400: "#fcd34d",
          500: "#fbbf25",
          600: "#f59e0b",
          700: "#d97706",
          800: "#b45309",
          900: "#92400e",
        },
        accent: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        dark: {
          900: "#0a0a0a",
          800: "#141414",
          700: "#1f1f1f",
          600: "#2a2a2a",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "pulse-slow": {
          "0%, 100%": { 
            transform: "scale(1) rotate(0deg)", 
            borderRadius: "40% 60% 60% 40% / 50% 40% 60% 50%" 
          },
          "50%": { 
            transform: "scale(1.05) rotate(2deg)", 
            borderRadius: "60% 40% 40% 60% / 40% 60% 50% 40%" 
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
