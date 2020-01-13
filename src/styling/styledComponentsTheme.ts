const theme = {
  transparentBlack: 'rgba(0, 0, 0, 0.3)',
  blackShadow: 'rgba(0, 0, 0, 0.8)',
  white: '#fff',
  black: '#000',
  red: '#cc0000',
  darkRed: '#721c24',
  backgroundRed: '#f8d7da',
  borderRed: '#f5c6cb',
  darkGreen: '#155724',
  backgroundGreen: '#d4edda',
  borderGreen: '#c3e6cb',
  breakpoints: {
    up: {
      xs: 'min-width: 0',
      sm: 'min-width: 600px',
      md: 'min-width: 960px',
      lg: 'min-width: 1280px',
      xl: 'min-width: 1920px'
    },
    down: {
      sm: 'max-width: 599px',
      md: 'max-width: 959px',
      lg: 'max-width: 1279px',
      xl: 'max-width: 1919px'
    }
  }
}

export default theme
