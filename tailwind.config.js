/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-deep": "#050508",
        "bg-elevated": "#0b0b0f",
        "gold-soft": "#f3e0c4",
        "gold-muted": "#d7c0a1",
        "accent-subtle": "#6b7280",
      },
      fontFamily: {
        sans: ["Times New Roman", "Times", "serif"],
        mono: ["Times New Roman", "Times", "serif"],
        display: ["Times New Roman", "Times", "serif"],
      },
      boxShadow: {
        "soft-glow":
          "0 0 50px rgba(0,0,0,0.9), 0 0 120px rgba(15,23,42,0.9)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 0 0, rgba(15,23,42,0.55) 0, transparent 55%), radial-gradient(circle at 100% 0, rgba(30,41,59,0.45) 0, transparent 55%), radial-gradient(circle at 0 100%, rgba(15,23,42,0.6) 0, transparent 55%)",
      },
    },
  },
  plugins: [],
};
