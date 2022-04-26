const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'xxs': {'max': '640px'},
      ...defaultTheme.screens,
    },
    colors: {
      black: '#050709',
      white: '#FFFFFF',
      blackText: '#291507',
      cWhite: '#E3E1DC',
      sBrown: '#4D270C',
      brownText: 'rgba(41, 21, 7, 0.6)',
      // remove this yellow when finished
      yellow: '#9B870C'
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
