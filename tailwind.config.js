const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		"blueGray": colors.blueGray,
    		"emerald": colors.emerald,
    		"teal": colors.teal,
    		"cyan": colors.cyan,
    		"rose": colors.rose
    	}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
