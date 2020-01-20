import React, { useContext } from 'react'

import { compose } from 'recompose'

import Routes from './routes'

import Container from '@material-ui/core/Container'

import { StyledApp } from './styledComponents/app'
import theme from 'styling/styledComponentsTheme'
import { ThemeProvider } from 'styled-components'

import { withSnackbar } from 'components/SnackbarProvider'
import {
  WithAuthentication,
  AuthUserContext
} from 'components/AuthenticationProvider'

import MainMenu from './mainMenu'
import Footer from './footer'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'

const App: React.FC = () => {
  const { authenticated, user } = useContext(AuthUserContext)

  const authorizationHeader =
    user && user.authToken && user.authToken.oauthAccessToken
      ? `Bearer ${user.authToken.oauthAccessToken}`
      : user && user.authToken && user.authToken.accessToken
      ? `Bearer ${user.authToken.accessToken}`
      : null

  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: authorizationHeader
    }
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        return console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      })
    }
    if (networkError) {
      return console.log(`[Network error]: ${networkError}`)
    }
  })

  const link = ApolloLink.from([errorLink, httpLink])

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StyledApp authenticated={authenticated}>
          <div className="menu">{authenticated && <MainMenu />}</div>
          <Container fixed>
            <Routes />
          </Container>
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default compose(withSnackbar, WithAuthentication)(App)
