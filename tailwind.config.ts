import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        "big-jhon": "var(--font-big-jhon)",
        "futura-book": "var(--font-futura-book)",
      },
      colors: {
        base: {
          white: "rgb(var(--color-base-white) / <alpha-value>)",
          black: "rgb(var(--color-base-black) / <alpha-value>)",
          "white-off": "rgb(var(--color-base-white-off) / <alpha-value>)",
          stone20: "rgb(var(--color-base-stone-20) / <alpha-value>)",
          stone50: "rgb(var(--color-base-stone-50) / <alpha-value>)",
          stone100: "rgb(var(--color-base-stone-100) / <alpha-value>)",
          brown: "rgb(var(--color-base-brown) / <alpha-value>)",
        },
        accent: {
          metal: "rgb(var(--color-accent-metal) / <alpha-value>)",
          earth: "rgb(var(--color-accent-earth) / <alpha-value>)",
          water: "rgb(var(--color-accent-water) / <alpha-value>)",
          fire: "rgb(var(--color-accent-fire) / <alpha-value>)",
          wood: "rgb(var(--color-accent-wood) / <alpha-value>)",
        },
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
      spacing: {
        header: "var(--header-height)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
