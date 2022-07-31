const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{html,ejs}'],
  theme: {
    screens: {
      md: '768px',
      lg: '960px',
      xl: '1296px',
    },
    container: {
      center: true,
      padding: '0.75rem',
    },
    fontFamily: {
      sans: ['Roboto', 'Noto Sans TC', ...fontFamily.sans],
    },
    fontSize: {
      sm: ['0.875rem', '1.5'],
      base: ['1rem', '1.5'],
      lg: ['1.125rem', '1.5'],
      xl: ['1.25rem', '1.5'],
      '2xl': ['1.5rem', '1.5'],
      '3xl': ['2rem', '1.5'],
      '4xl': ['2.25rem', '1.5'],
      '5xl': ['2.5rem', '1.5'],
      '6xl': ['2.625rem', '1.5'],
      '7xl': ['3rem', '1.5'],
      '8xl': ['4rem', '1.5'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#AA0601 !important',
          dark: '#650300 !important',
          light: '#FBF2F2',
        },
        gray: {
          DEFAULT: '#555555',
          light: '#DCDCDC',
        },
        grayLight: '#00000020',
        grayDark: '#212529',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
