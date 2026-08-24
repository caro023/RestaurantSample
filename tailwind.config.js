/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fdf6f3',
          100: '#faeae4',
          200: '#f5d5c8',
          300: '#edb8a3',
          400: '#e39378',
          500: '#d4714f',
          600: '#bf573c',
          700: '#a14432',
          800: '#863a2d',
          900: '#6f3429',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf4e8',
          300: '#f5ead5',
          400: '#ecd9b8',
          500: '#e0c494',
        },
        wine: {
          700: '#6b2d3c',
          800: '#5a2432',
          900: '#4a1d28',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
