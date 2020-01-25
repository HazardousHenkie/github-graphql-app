import React, { useState, useEffect, useCallback, useContext } from 'react'

import AuthUserContext from './context'

import { withFirebase, FirebaseProviderProps } from '../FirebaseProvider'

import history from 'utils/history'
import { home, login } from 'utils/routes'

import { snackbarContext } from '../SnackbarProvider'

import Cookies from 'universal-cookie'

const withAuthentication = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithAuthentication: React.FC<Props & FirebaseProviderProps> = props => {
    const cookies = new Cookies()
    const { firebase } = props
    const [authenticated, setAuthenticated] = useState(
      cookies.get('authenticated') ? cookies.get('authenticated') : false
    )

    const [user, setUser] = useState({
      userName: cookies.get('userName') ? cookies.get('userName') : '',
      userId: cookies.get('userId') ? cookies.get('userId') : '',
      authToken: cookies.get('userCredential')
        ? cookies.get('userCredential')
        : null
    })
    const { setSnackbarState } = useContext(snackbarContext)

    const logIn = (user: Record<string, any>) => {
      setAuthenticated(true)

      const userName =
        user.additionalUserInfo && user.additionalUserInfo.username
          ? user.additionalUserInfo.username
          : ''
      const userId = user.user ? user.user.uid : ''

      setUser({
        userName: userName,
        userId: userId,
        authToken: user.credential
      })

      cookies.set('userName', userName)
      cookies.set('userId', userId)
      cookies.set('userCredential', user.credential)
      cookies.set('authenticated', true)

      history.push(home)
    }

    const logOut = useCallback(() => {
      setAuthenticated(false)

      setUser({
        userName: '',
        userId: '',
        authToken: null
      })

      setSnackbarState({
        message: 'Logged out',
        variant: 'error'
      })

      cookies.remove('userName')
      cookies.remove('userId')
      cookies.remove('userCredential')
      cookies.remove('authenticated')

      history.push(login)
    }, [setSnackbarState, cookies])

    useEffect(() => {
      const listener = firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          if (!authenticated) {
            if (
              cookies.get('userName') &&
              cookies.get('userId') &&
              cookies.get('userCredential')
            ) {
              setAuthenticated(true)

              setUser({
                userName: cookies.get('userName'),
                userId: cookies.get('userId'),
                authToken: cookies.get('userCredential')
              })
            } else {
              setAuthenticated(false)

              history.push(login)
            }
          }
        } else {
          if (authenticated) {
            logOut()
          } else {
            history.push(login)
          }
        }
      })

      return (): void => {
        listener()
      }
    }, [
      firebase.auth,
      authenticated,
      setAuthenticated,
      setUser,
      cookies,
      logOut
    ])

    const providingValues = {
      authenticated,
      user,
      logIn,
      logOut
    }

    return (
      <AuthUserContext.Provider value={providingValues}>
        <Component {...(props as Props)} />
      </AuthUserContext.Provider>
    )
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
