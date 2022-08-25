/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js, css, png}"],
  theme: {
    extend: {
       fontSize:{
      head: '18px',
      },
      fontFamily:{
        root: 'Fredoka',
      },
      backgroundColor:{
        root: '#f5f5f5',
      }
    },
  },
  plugins: [],
}
