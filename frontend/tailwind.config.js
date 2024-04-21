/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "#00FF00",
        secondary: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
