const { join } = require('path');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx,css,scss}'),
    join(__dirname, 'modals/**/*.{js,ts,jsx,tsx,css,scss}'),
    join(__dirname, 'templates/**/*.{js,ts,jsx,tsx,css,scss}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx,css,scss}'),
    join(__dirname, 'utils/**/*.{js,ts,jsx,tsx,css,scss}'),
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.teal,
        darkBaseColor: '#353841',
        darkHighlight: '#1d1f24',
        darksecHighlight: '#2a2d35',
      },
    },
  },
  plugins: [typography],
};
