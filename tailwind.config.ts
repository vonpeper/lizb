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
          50: "var(--salmon-50)",
          100: "var(--salmon-100)",
          200: "var(--salmon-200)",
          400: "var(--salmon-400)",
          500: "var(--salmon-500)",
          700: "var(--salmon-700)",
        },
        border: "var(--border-color)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
      boxShadow: {
        subtle: "0 2px 8px -2px rgba(24, 20, 18, 0.04), 0 8px 24px -4px rgba(232, 135, 113, 0.06)",
        card: "0 4px 20px -2px rgba(24, 20, 18, 0.05), 0 12px 32px -4px rgba(232, 135, 113, 0.08)",
        floating: "0 10px 40px -10px rgba(24, 20, 18, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
