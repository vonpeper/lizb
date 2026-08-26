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
        background: {
          DEFAULT: "var(--bg-main)",
          alt: "var(--bg-alt)",
        },
        foreground: {
          DEFAULT: "var(--text-main)",
          secondary: "var(--text-secondary)",
        },
        salmon: {
          50: "#FFF6F2",
          100: "#FFE4DC",
          200: "#FCD5CA",
          300: "#F9C0B3",
          400: "#F6B6A6",
          500: "#E88771",
          600: "#D36D56",
          700: "#B94F3D",
          800: "#8E3526",
          900: "#5C2016",
        },
        coral: {
          400: "#FB927C",
          500: "#F06A50",
          600: "#D94E34",
        },
        border: "var(--border-color)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "var(--font-jakarta)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
      boxShadow: {
        subtle: "0 2px 8px -2px rgba(24, 20, 18, 0.04), 0 8px 24px -4px rgba(232, 135, 113, 0.06)",
        card: "0 12px 40px -10px rgba(232, 135, 113, 0.16), 0 4px 16px -2px rgba(24, 20, 18, 0.04)",
        glass: "0 8px 32px 0 rgba(185, 79, 61, 0.12)",
        glow: "0 0 40px -5px rgba(232, 135, 113, 0.45)",
        "glow-lg": "0 0 70px -5px rgba(185, 79, 61, 0.4)",
        floating: "0 25px 50px -12px rgba(24, 20, 18, 0.18)",
        dock: "0 10px 40px -5px rgba(24, 20, 18, 0.25), 0 0 20px -2px rgba(232, 135, 113, 0.2)",
      },
      animation: {
        "float-slow": "float 5s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 1.5s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
