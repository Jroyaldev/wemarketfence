import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF5C8D",
          foreground: "hsl(0, 0%, 98%)",
        },
        secondary: {
          DEFAULT: "#58CCDC",
          foreground: "hsl(240, 4%, 16%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 63%, 31%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(210, 20%, 98%)",
          foreground: "hsl(215, 16%, 47%)",
        },
        accent: {
          DEFAULT: "#FFD166",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(215, 25%, 27%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(215, 25%, 27%)",
        },
        sky: "#87CEEB",
        grass: "#7CFC00",
        'neutral-dark': '#000000',
        'neutral-near-black': '#111111',
        'neutral-light': '#F5F5F5',
        'accent-red': '#FF6347',
        'accent-green': '#39FF14',
        'accent-yellow': '#FFD166',
        'accent-orange': '#FF9F1C',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.375rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-grow": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "attention-shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(255, 99, 71, 0.7), 0 0 10px rgba(255, 99, 71, 0.5), 0 0 15px rgba(255, 99, 71, 0.3)",
            filter: "brightness(1)"
          },
          "50%": { 
            boxShadow: "0 0 10px rgba(255, 99, 71, 0.8), 0 0 20px rgba(255, 99, 71, 0.6), 0 0 30px rgba(255, 99, 71, 0.4)",
            filter: "brightness(1.1)"
          },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-grow": "pulse-grow 2s ease-in-out infinite",
        "attention-shake": "attention-shake 1.5s cubic-bezier(.36,.07,.19,.97) infinite",
        "glow-pulse": "glow-pulse 2s infinite",
        "bounce-subtle": "bounce-subtle 2s infinite ease-in-out",
        "spin-slow": "spin-slow 12s linear infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
