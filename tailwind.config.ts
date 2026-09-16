import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        "brand-strong": "rgb(var(--color-brand-strong) / <alpha-value>)",
        ivory: "rgb(var(--color-ivory) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        charcoal: "rgb(var(--color-charcoal) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        raised: "var(--shadow-raised)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
