/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3C82F5',
        secondary: {
          green: '#22C55E',
          orange: '#F97316'
        }
      }
    },
  },
  plugins: [],
};