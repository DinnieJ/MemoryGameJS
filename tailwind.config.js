module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'menubtn': '0px 2px 15px 1px rgba(0,0,0,0.79)',
        'side': '0px 0px 6px 0px #000000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
