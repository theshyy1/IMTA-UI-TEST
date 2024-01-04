/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "40px",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
