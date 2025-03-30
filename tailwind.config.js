/** @type {import('tailwindcss').Config} */
const { trueGray } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')




module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        textColor: "var(--textColor)",
        primaryDark: "var(--primaryDark)",
        secondaryDark: "var(--secondaryDark)",
        backgroundDark: "var(--backgroundDark)",
        textColorDark: "var(--textColorDark)",
        gridTemplateColumns:{
          fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
        }
      }
      
    },
    darkSelector: '.dark-mode',
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  dark: {
    primary: colors.green[500],
    secondary: colors.green[500],
    background: colors.gray[800],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
}