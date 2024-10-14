/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'common': ['Poppins', 'sans-serif',],
      'sub': ['Frank Ruhl Libre', 'serif',],
      'Podkova': ['Podkova', 'serif',],
      
    },
    extend: {},
  },
  plugins: [],
}