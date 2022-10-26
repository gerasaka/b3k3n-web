/** @type {import('tailwindcss').Config} */
const theme = require('./style-config/theme.ts');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme,
  plugins: [],
};
