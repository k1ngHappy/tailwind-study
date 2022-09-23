/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    container: {
      padding: "20px",
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
