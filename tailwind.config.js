/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT(
  {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }

          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }

          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
        container: {
          center: true,
          padding: "1rem",
        },
        fontFamily: {
          playwrite: ["Playwrite ES Deco", "cursive"],
          playfair: ["Playfair Display", "serif"]
        },
        colors: {
          primary: "#006944",
        },
        fontSize: {
          normal: "15px"
        }
      },
    },
    plugins: [],
  }
)

