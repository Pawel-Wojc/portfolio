/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        'own-100': '#477390',
        'own-200': '#455c76',
        'own-300': '#263d59',
        'own-400': '#39354a'
      }
    },
  },
  plugins: [],
}

