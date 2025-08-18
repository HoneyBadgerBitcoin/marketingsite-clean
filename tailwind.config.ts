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
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
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
      },
    },
  },
  plugins: [],
} satisfies Config;
