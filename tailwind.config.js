/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'body' : ['"League Spartan"', '"sans-serif"']
      },
      backgroundImage : {
        'background-stars' : "url('/public/assets/background-stars.svg')",
      }
    },
  },
  plugins: [],
}
