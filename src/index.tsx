import React from 'react'
import ReactDOM from 'react-dom'

import App from 'containers/App/App'

import { Router } from 'react-router-dom'
import history from 'utils/history'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'

import theme from 'baseStyling/themeStyles'

import 'BaseStyling/index.css'
import 'typeface-roboto'

import * as serviceWorker from 'serviceWorker'

import { Provider } from 'react-redux'
import { store, persistor } from 'redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import Firebase, { FirebaseContext } from 'components/FirebaseProvider'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FirebaseContext.Provider value={new Firebase()}>
        <CssBaseline />
        <Router history={history}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </StylesProvider>
        </Router>
      </FirebaseContext.Provider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
