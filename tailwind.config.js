/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#DBFFFD",
          100: "#BDFFFC",
          200: "#7AFFF8",
          300: "#38FFF5",
          400: "#00F5E9",
          500: "#00B1A7",
          600: "#008F88",
          700: "#006B66",
          800: "#004744",
          900: "#002422",
          950: "#000F0F"
        },
        "orange": {
          50: "#FEF5F1",
          100: "#FCE8DE",
          200: "#FAD4C2",
          300: "#F7BCA1",
          400: "#F5A580",
          500: "#F29061",
          600: "#ED6222",
          700: "#BC4610",
          800: "#7F2F0A",
          900: "#3D1705",
          950: "#210C03"
        },
        "secondary": {
          50: "#ECF1F9",
          100: "#D9E3F2",
          200: "#AEC5E5",
          300: "#88A9D8",
          400: "#5E8BCA",
          500: "#3C70B8",
          600: "#305992",
          700: "#223F68",
          800: "#152740",
          900: "#0A131F",
          950: "#05090F"
        },
        primaryWhite: "#FFF2E1",
      }
    },
  },
  plugins: [],
}