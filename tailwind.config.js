// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff8f1", // soft light peach
          100: "#ffeedd",
          200: "#ffd7b8",
          300: "#ffb877",
          400: "#ff914d", // warm glowing orange
          500: "#ff7a33", // main bright orange
          600: "#e55f1e", // deeper glowing orange
          700: "#cc4a12", // strong but not too dark
          800: "#99350d", // balanced dark orange
          900: "#662309", // deep subtle tone
        },

        secondary: {
          50: "#f9fafb",
          300: "#d1d5db",
          400: "#9ca3af",
          800: "#1f2937",
          900: "#0a0a0a", // almost black
        },

        black: {
          DEFAULT: "#000000",
          900: "#0a0a0a",
          800: "#1a1a1a",
          700: "#2d2d2d",
        },

        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
