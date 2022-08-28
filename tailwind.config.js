/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js, css}"],
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
      },
      colors:{
        primary: '#192632',
      }
    },
  },
  plugins: [],
}
