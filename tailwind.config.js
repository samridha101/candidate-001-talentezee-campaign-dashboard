/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: '#00897B',
        accent: '#CDDC39'
      }
    },
  },
  plugins: [],
}
