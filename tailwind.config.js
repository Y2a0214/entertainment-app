/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#10141E',
        'light-blue': '#5A698F',
        'mid-blue': '#161D2F'
      },
    },
  },
  plugins: [],
}