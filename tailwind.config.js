/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./app/components/**/*.{html,js,jsx,ts,tsx}",
    "./app/layout.tsx.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        secondary: {
          100: "#f0f4ff",
          200: "#d9e3ff",
          300: "#a6c1ff",
          400: "#598bff",
          500: "#3366ff",
          600: "#254ed8",
          700: "#1939b3",
          800: "#102a80",
          900: "#091c4d",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
