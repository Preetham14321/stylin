/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
    'solid':'#646464',
    'white':'#FFFFFF',
    'hero':'#000000'
    },
  },
  plugins: [],
}
