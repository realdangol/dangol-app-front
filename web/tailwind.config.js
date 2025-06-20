/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@realdangol/jjindangol-ui/tailwind-preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@realdangol/jjindangol-ui/**/*.{js,ts,jsx,tsx}',
  ],
};
