/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: "280px",
        md: "426px",
        lg: "768px",
        xl: "1044px"
      },
    },
  },
  plugins: [],
}

