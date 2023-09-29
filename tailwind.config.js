/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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

