/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        animated: 'url("/src/assets/bg-animated.svg")'
      }
    },
    plugins: []
  }
}
