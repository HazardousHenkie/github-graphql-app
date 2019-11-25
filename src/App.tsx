import React from 'react'
import { compose } from 'recompose'

import { Router } from 'react-router-dom'
import Routes from './routes/routes'
import history from './helpers/history'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import { WithAuthentication } from './components/authentication'
import { withSnackbar } from './components/snackbar'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#343434'
    }
  }
})

theme = responsiveFontSizes(theme)

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Router history={history}>
        <div className="content">
          <ThemeProvider theme={theme}>
            <Container fixed>
              <Routes />
            </Container>
          </ThemeProvider>
        </div>
      </Router>
    </div>
  )
}
export default compose(withSnackbar, WithAuthentication)(App)
