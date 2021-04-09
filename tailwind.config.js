const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		"blueGray": colors.blueGray,
        "trueGray": colors.trueGray,
    		"emerald": colors.emerald,
    		"teal": colors.teal,
    		"cyan": colors.cyan,
    		"rose": colors.rose,
    		"violet": colors.violet,
    		"fuchsia": colors.fuchsia,
    		"indigo": colors.indigo
    	}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
