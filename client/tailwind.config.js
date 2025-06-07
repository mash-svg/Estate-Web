/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        navy: {
          DEFAULT: '#0A1D37',
          light: '#122848',
          dark: '#06101F',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E7C85D',
          dark: '#B28F24',
        },
      }
    },
  },
  plugins: [],
}