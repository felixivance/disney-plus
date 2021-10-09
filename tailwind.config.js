module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'bg-home-img': "url(/images/home-background.png)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
