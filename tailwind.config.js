/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      lg: { max: "1024px" },
      md: { max: "769px" },
      sm: { max: "480px" },
      vsm: { max: "300px" },
    },
    container: {
      padding: "20px",
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
