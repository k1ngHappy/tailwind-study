/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    extend: {
      fontFamily: {
        redHat: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
