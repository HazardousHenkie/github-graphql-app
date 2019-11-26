import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../redux/actions'

import { withFirebase, FirebaseProviderProps } from '../firebase'

import AuthUserContext from './context'

import useSnackbarContext from '../snackbar/context'

interface ReduxProvider {
  loggedIn: boolean
}

const withAuthentication = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithAuthentication: React.FC<Props & FirebaseProviderProps> = props => {
    const { firebase } = props
    const dispatch = useDispatch()
    const [authenticated, setAuthenticated] = useState(false)
    const { loggedIn } = useSelector(
      (state: Record<string, ReduxProvider>) => state.user
    )

    const { setSnackbarState } = useSnackbarContext()

    useEffect(() => {
      const listener = firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          if (!loggedIn) {
            dispatch(
              setUser({
                loggedIn: false,
                userName: '',
                userId: '',
                authToken: null
              })
            )

            setAuthenticated(false)
            setSnackbarState({
              message: 'Please login again!',
              variant: 'error'
            })
          } else {
            setAuthenticated(true)
          }
        } else {
          dispatch(
            setUser({
              loggedIn: false,
              userName: '',
              userId: '',
              authToken: null
            })
          )

          setAuthenticated(false)
        }
      })

      return (): void => {
        listener()
      }
    }, [setAuthenticated, firebase, dispatch, loggedIn, setSnackbarState])
    return (
      <AuthUserContext.Provider value={authenticated}>
        <Component {...(props as Props)} />
      </AuthUserContext.Provider>
    )
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
