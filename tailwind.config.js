/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          black: '#121212',
          darkgray: '#181818',
          lightgray: '#282828',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};