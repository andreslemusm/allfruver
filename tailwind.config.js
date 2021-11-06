const { theme } = require("tailwindcss/defaultConfig");
const colors = require("tailwindcss/colors");

/** @type {Parameters<import('tailwindcss/index')>[0]} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      club: "#FF776F",
      gray: { 100: "#F7F9FB", 200: "#C7CEC8", 300: "#777D78", 400: "#222222" },
      green: { 300: "#2BB673", 100: "#EEF7F2", 200: "#ECF3E4" },
      red: "#F32727",
      white: colors.white,
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        sans: ["'Quicksand'", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
