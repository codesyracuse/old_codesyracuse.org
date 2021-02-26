const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './_site/**/*.html',
  ],
  theme: {
    extend: { 
      minHeight: {
       '0': '0',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    // colors generated from https://javisperez.github.io/tailwindcolorshades/?governor-bay=3d41bf
    colors: {
        blue: {
          '50': '#f5f6fc', 
          '100': '#ececf9', 
          '200': '#cfd0ef', 
          '300': '#b1b3e5', 
          '400': '#777ad2', 
          '500': '#4e7dd9', 
          '600': '#3e43bf', 
          '700': '#3c19be', 
          '800': '#252773', 
          '900': '#1e205e'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
