
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1E1E1E",
          mid: "#b8b8b8",
          light: "#848383",
          shape1: "#378832",
          shape2: "#861F1F",
          border: "#949393",
          bg: "#F3F3F3"
        }
      },
      fontFamily: {
        cormorant: ["'Cormorant SC'", "serif"],
        josefin: ["'Josefin Sans'", "sans-serif"]
      },
      letterSpacing: {
        widest2: ".2em",
        widest3: ".25em"
      }
    },
  },
  plugins: [],
}
