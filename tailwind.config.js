/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f4f8f4',
          100: '#e3ede2',
          200: '#c7dbc6',
          300: '#9ec19c',
          400: '#73a371',
          500: '#558653',
          600: '#436c41',
          700: '#365636',
          800: '#2c452d',
          900: '#253a26',
        },
        cream: {
          50:  '#fbf8f3',
          100: '#f5efe3',
          200: '#ead9ba',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
      },
    },
  },
  plugins: [],
}
