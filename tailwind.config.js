module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '100': '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
