/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#fff9e6',
          100: '#fff2cc',
          200: '#ffe699',
          300: '#ffd966',
          400: '#ffcc33',
          500: '#ffbf00',
          600: '#e6ac00',
          700: '#cc9900',
          800: '#b38600',
          900: '#996600',
        },
        beehive: {
          100: '#f7f3e3',
          200: '#f0e7c7',
          300: '#e8dbab',
          400: '#e1cf8f',
          500: '#d9c373',
          600: '#ae9c5c',
          700: '#827545',
          800: '#574e2e',
          900: '#2b2717',
        },
      },
      fontFamily: {
        honey: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}