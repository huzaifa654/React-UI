/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptopScreenHeight': { 'raw': '(max-height: 660px)' },
        // => @media (max-width: 1245px) { ... }
        'laptopL': { 'max': '1400px' },
        'laptopLarge': { 'max': '1460px' },
        'midLeve2': { 'max': '649px' },
        'laptop': { 'max': '1300px' },
        'midLevel': { 'max': '1150px' },
        // => @media (max-width: 1100px) { ... }
        'lgSmall': { 'max': '900px' },
        // => @media (max-width: 1100px) { ... }
        'lg': { 'max': '1200px' },
        // => @media (max-width: 1100px) { ... }
        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }
        'sm': { 'max': '495px' },
        // => @media (max-width: 495px) { ... }
        'vSm': { 'max': '320px' },
        // => @media (max-width: 320px) { ... }
      },
      backgroundImage: {
        'pattern': "url('./src/assets/images/Frame 16.png')",
        // 'bgUpload': "url('./src/assets/images/Frame 7.png')",
      },
      colors: {
        primary: "#768297",
        secondary: "#0e2e50",
        blackbg: "#212120",
        input: "#525589",
        buttonbg: "#0075FF",
        header: "#080C2E",
        white: "#ffff"

      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },


  },
  plugins: [],
}