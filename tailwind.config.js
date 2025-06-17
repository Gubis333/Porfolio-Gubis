/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '200': '35rem',
        '300': '40rem',
        '400': '50rem',
      },
      fontFamily: {
        grotesque: ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
        caslon: ['"F37 Caslon"', 'serif'],
        rmneue: ['RMNeue', 'sans-serif'],
        dashiell: ['"Dashiell Text"', 'serif'],
      },
    },
  }, 
  plugins: [],
};