/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Custom small screen
        'md': '768px',   // Custom medium screen
        'lg': '1024px',  // Custom large screen
        'xl': '1400px',  // Custom extra-large screen
        // Add more custom screens if needed
      },
    },
    colors: {
    'solid':'#646464',
    'white':'#FFFFFF',
    'hero':'#000000'
    },
  },
  plugins: [],
}
