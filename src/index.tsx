import React from 'react'
import ReactDOM from 'react-dom'

import App from 'containers/App/App'

import { Router } from 'react-router-dom'
import history from 'utils/history'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'

import theme from 'styling/themeStyles'

import './styling/index.css'
import 'typeface-roboto'

import * as serviceWorker from 'serviceWorker'

import Firebase, { FirebaseContext } from 'components/FirebaseProvider'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <CssBaseline />
    <Router history={history}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
