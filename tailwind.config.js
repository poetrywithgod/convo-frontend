/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // allows dark/light mode toggle using a "dark" class
  theme: {
    extend: {
      colors: {
        convo: {
          dark: "#0f0f1a",     // main dark background
          accent: "#7c3aed",   // purple accent
          highlight: "#ff6b81", // reaction highlight
          card: "#1a1a2e",     // slightly lighter dark for cards
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        convo: "0 4px 20px rgba(124, 58, 237, 0.3)", // fancy purple glow
      },
    },
  },
  plugins: [],
}
