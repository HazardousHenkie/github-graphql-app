import React, { useState, useEffect } from 'react'

import AuthUserContext from './context'

import { withFirebase, FirebaseProviderProps } from '../FirebaseProvider'

import useSnackbarContext from '../snackbar/context'

const withAuthentication = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithAuthentication: React.FC<Props & FirebaseProviderProps> = props => {
    const { firebase } = props
    const [authenticated, setAuthenticated] = useState(false)
    const { setSnackbarState } = useSnackbarContext()

    //data: Record<string, any> get data from auth user
    const logIn = () => {
      setAuthenticated(true)
    }

    //remove data from auth user
    const logOut = () => {
      setAuthenticated(false)
      setSnackbarState({
        message: 'Please login again!',
        variant: 'error'
      })
    }

    useEffect(() => {
      const listener = firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          if (!authenticated) {
            logIn()
          }
        } else {
          if (authenticated) {
            logOut()
          }
        }
      })

      return (): void => {
        listener()
      }
    }, [setAuthenticated, firebase, authenticated, setSnackbarState])

    // userName: '',
    // userId: '',
    // authToken: null
    // combine provider props

    return (
      <AuthUserContext.Provider value={{ logIn, logOut, authenticated }}>
        <Component {...(props as Props)} />
      </AuthUserContext.Provider>
    )
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
