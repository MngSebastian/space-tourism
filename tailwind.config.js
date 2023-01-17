/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0B0D17",
        lightBlueGray: "#D0D6F9",
        white: "#FFFFFF"
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
      },
      content: {
        destinationMobile: "url('./assets/destination/background-destination-mobile.jpg')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
