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
      yellow: '#9B870C'
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
