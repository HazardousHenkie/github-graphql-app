import React from 'react'
import { compose } from 'recompose'

import { useSelector } from 'react-redux'

import { Router } from 'react-router-dom'
import Routes from './routes/routes'
import history from './helpers/history'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import { WithAuthentication } from './components/authentication'
import { withSnackbar } from './components/snackbar'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#343434'
    }
  }
})

theme = responsiveFontSizes(theme)

const App: React.FC = () => {
  interface ReduxProvider {
    authToken: Record<string, string>
  }

  const { authToken } = useSelector(
    (state: Record<string, ReduxProvider>) => state.user
  )

  const authorizationHeader =
    authToken && authToken.oauthAccessToken
      ? `Bearer ${authToken.oauthAccessToken}`
      : authToken && authToken.accessToken
      ? `Bearer ${authToken.accessToken}`
      : null

  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: authorizationHeader
    }
  })

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CssBaseline />
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Container fixed>
              <Routes />
            </Container>
          </ThemeProvider>
        </Router>
      </div>
    </ApolloProvider>
  )
}
export default compose(withSnackbar, WithAuthentication)(App)
