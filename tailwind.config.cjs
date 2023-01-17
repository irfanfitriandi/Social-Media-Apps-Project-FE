/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#db0000",
        secondary: "#564d4d",
        accent: "#831010",
        content: "#111110",
        form: "#d8d8dd",
        com: "#333333",
      },
    },
  },
  plugins: [require("daisyui")],
};
