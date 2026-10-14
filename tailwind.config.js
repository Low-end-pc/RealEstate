/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          accent: '#c5a880',
          dark: '#090a0f',
          darker: '#040507'
        }
      }
    },
  },
  plugins: [],
}
