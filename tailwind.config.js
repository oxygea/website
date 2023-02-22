/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      base: ['Acrom', 'sans-serif'],
    },
    fill: {
      current: 'currentColor',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        violet: '#8282EB',
        green: '#2DE6C8',
        error: '#FF2E00',
        gray: '#EDEDEF',
      },
    },
  },
  plugins: [],
}
