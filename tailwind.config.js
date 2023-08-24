/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'prussian-blue': '#0F324F',
        'celestial-blue': '#3C9CD6',
        'yellow-orange': '#fbb03b',
        'blue-gray': '#6699CC'
      },
      fontFamily: {
        dancing: ['Dancing Script'],
        'chakra-patch': ['Chakra Petch']
      }
    },
  },
  plugins: [],
}

