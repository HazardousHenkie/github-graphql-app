import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#343434'
    }
  }
})

export default theme = responsiveFontSizes(theme)
