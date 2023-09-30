/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mooli: ["Mooli", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
}

