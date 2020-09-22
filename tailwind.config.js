module.exports = {
  theme: {
    colors: {
      primary: '#25ADE3',
      secondary: '#E3B725',
      tertiary: '#C33B77',
      blue: {
        dark: '#18375E',
        light: '#25ADE3'
      },
      grey: {
        base: '#121212',
        100: 'rgba(255,255,255,0.05)',
        200: 'rgba(255,255,255,0.07)',
        300: 'rgba(255,255,255,0.08)',
        400: 'rgba(255,255,255,0.09)',
        500: 'rgba(255,255,255,0.11)',
        600: 'rgba(255,255,255,0.12)',
        700: 'rgba(255,255,255,0.14)',
        800: 'rgba(255,255,255,0.15)',
        900: 'rgba(255,255,255,0.16)',
        low: 'rgba(255, 255, 255, 0.38)',
        medium: 'rgba(255, 255, 255, 0.60)',
        high: 'rgba(255, 255, 255, 0.87)'
      },
      green: '#3BC35A',
      red: '#E3253B',
      violet: '#C33B77',
      yellow: '#E3B725',
      white: 'rgba(255, 255, 255, 0.87)',
      transparent: 'transparent'
    },
    fontFamily: {
      display: 'Roboto'
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.75rem',
      '2xl': '2.25rem',
      '3xl': '3rem',
      '4xl': '6rem'
    }
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled']),
    cursor: ({ after }) => after(['disabled']),
    textColor: ({ after }) => after(['disabled']),
    borderWidth: ({ after }) => after(['disabled']),
    borderColor: ({ after }) => after(['disabled'])
  },
  plugins: []
}
