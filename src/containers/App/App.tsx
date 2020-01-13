import React from 'react'

import { useSelector } from 'react-redux'

import Routes from './routes'

import Container from '@material-ui/core/Container'

import { StyledApp } from './styledComponents/app'
import theme from 'styling/styledComponentsTheme'
import { ThemeProvider } from 'styled-components'

import { WithAuthentication } from 'components/AuthenticationProvider'
import MainMenu from './mainMenu'
import Footer from './footer'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'

const App: React.FC = () => {
  interface LoginProvider {
    authToken: Record<string, string>
  }

  interface AuthenticatedProvider {
    loggedIn: boolean
  }

  const authenticated = useSelector(
    (state: Record<string, AuthenticatedProvider>) => state.user.loggedIn
  )

  const { authToken } = useSelector(
    (state: Record<string, LoginProvider>) => state.user
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
export default WithAuthentication(App)
