/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT(
  {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        container: {
          center: true,
          padding: "1rem",
        },
        colors: {
          primary: "#006944",
        },
      },
    },
    plugins: [],
  }
)

