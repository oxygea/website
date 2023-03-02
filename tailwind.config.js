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
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      xxs: ['10px', { lineHeight: '14px' }],
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '20px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '24px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '5xl': ['42px', { lineHeight: '56px' }],
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
        grayDark: '#141414',
      },
    },
  },
  plugins: [],
}
