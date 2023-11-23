/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#00B1A7",
        primaryOrange: "#F29061",
        primaryWhite: "#FFF2E1",
        primaryBlue: "#152740",
      }
    },
  },
  plugins: [],
}