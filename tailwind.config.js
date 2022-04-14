const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90c9f9",
        300: "#63b4f6",
        400: "#42a4f5",
        500: "#2194f3",
        600: "#1f87e5",
        700: "#1a75d2",
        800: "#1764c0",
        900: "#1045a1",
      },
      accent: {
        50: "#f2e7fe",
        100: "#dbc4fb",
        200: "#c39dfa",
        300: "#aa71f9",
        400: "#964df6",
        500: "#8021f3",
        600: "#741bec",
        700: "#630de4",
        800: "#5200df",
        900: "#3000d8",
      },
      warn: {
        300: "#ff7961",
        500: "#f44336",
        700: "#ba000d",
      },
    },
    extend: {},
  },
  plugins: [],
};
