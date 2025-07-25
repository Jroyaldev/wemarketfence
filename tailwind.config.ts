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
          DEFAULT: "#2563eb",
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#2563eb",
          600: "#1d4ed8",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#64748b",
          50: "#f8fafc",
          100: "#f1f5f9",
          500: "#64748b",
          600: "#475569",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#f59e0b",
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        // Simplified modern color palette
        'neutral': {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        'blue': {
          50: '#eff6ff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        'emerald': {
          50: '#ecfdf5',
          500: '#10b981',
          600: '#059669',
        },
        'amber': {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
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
