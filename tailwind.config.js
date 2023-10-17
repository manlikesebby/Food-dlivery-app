/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange":"#FA4A0c",
        "light-gray":"#737373",
        "dark-gray":"#252842",
        "white":"#fff",
        "regal-blue":"#243c5a",
         "deep-blue" : "#252B42"
      }
    },
  },
  plugins: [],
}

