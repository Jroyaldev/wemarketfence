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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF5C8D", // Vibrant pink for neo-brutalism
          foreground: "hsl(0, 0%, 98%)",
        },
        secondary: {
          DEFAULT: "#58CCDC", // Bright turquoise
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
          DEFAULT: "#FFD166", // Bright yellow-gold
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
        sky: "#87CEEB", // Sky blue for backgrounds
        grass: "#7CFC00", // Bright green
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
