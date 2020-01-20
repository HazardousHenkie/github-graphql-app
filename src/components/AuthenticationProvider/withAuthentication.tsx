import React, { useState, useEffect, useCallback } from 'react'

import AuthUserContext from './context'

import { withFirebase, FirebaseProviderProps } from '../FirebaseProvider'

import history from 'utils/history'
import { home, login } from 'utils/routes'

import useSnackbarContext from '../snackbar/context'

const withAuthentication = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithAuthentication: React.FC<Props & FirebaseProviderProps> = props => {
    const { firebase } = props
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState({
      userName: '',
      userId: '',
      authToken: null
    })
    const { setSnackbarState } = useSnackbarContext()

    const logIn = (user: Record<string, any>) => {
      setAuthenticated(true)

      setUser({
        userName:
          user.additionalUserInfo && user.additionalUserInfo.username
            ? user.additionalUserInfo.username
            : '',
        userId: user.user ? user.user.uid : '',
        authToken: user.credential
      })

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

      history.push(login)
    }, [setSnackbarState])

    useEffect(() => {
      const listener = firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          if (!authenticated) {
            logOut()
          } else {
            setAuthenticated(true)
          }
        } else {
          logOut()
        }
      })

      return (): void => {
        listener()
      }
    }, [firebase.auth, authenticated, setAuthenticated, logOut])

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
