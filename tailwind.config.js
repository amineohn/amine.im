/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        indigo: colors.indigo,
        red: colors.red,
        yellow: colors.yellow,
        amber: colors.amber,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        sky: colors.sky,
        blue: colors.blue,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        cyan: colors.cyan,
        orange: colors.orange,
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
      },
    },
  },
  variants: {},
  plugins: [],
};
