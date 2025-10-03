/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "convo-dark": "#0f0f1a",
        "convo-light": "#f5f5f7",   // Light mode background
        "convo-accent": "#4f46e5",
        "convo-accent-light": "#818cf8",
        "convo-border": "#2a2a40",
        "convo-text-dark": "#e5e7eb",  // Dark mode text
        "convo-text-light": "#1a1a1a", // Light mode text
      },
    },
  },
  plugins: [],
}
