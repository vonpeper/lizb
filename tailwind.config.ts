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
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
      boxShadow: {
        subtle: "0 2px 8px -2px rgba(24, 20, 18, 0.04), 0 8px 24px -4px rgba(232, 135, 113, 0.06)",
        card: "0 8px 30px -4px rgba(232, 135, 113, 0.12), 0 4px 12px -2px rgba(24, 20, 18, 0.04)",
        glow: "0 0 35px -5px rgba(232, 135, 113, 0.35)",
        "glow-lg": "0 0 50px -5px rgba(185, 79, 61, 0.3)",
        floating: "0 20px 40px -15px rgba(24, 20, 18, 0.12)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "gradient-x": "gradientX 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
