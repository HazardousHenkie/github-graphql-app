import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AuthUserContext from './context'
import { addUser } from '../../redux/actions'

import { withFirebase, FirebaseProviderProps } from '../firebase'

interface ReduxProvider {
  userId: string
  loggedIn: boolean
}

const withAuthentication = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithAuthentication: React.FC<Props & FirebaseProviderProps> = props => {
    const { firebase } = props
    const dispatch = useDispatch()
    const [authenticated, setAuthenticated] = useState(false)
    const { userId, loggedIn } = useSelector(
      (state: Record<string, ReduxProvider>) => state.user
    )

    useEffect(() => {
      const listener = firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          if (!loggedIn) {
            dispatch(
              addUser({
                loggedIn: true,
                userName: authUser.displayName ? authUser.displayName : '',
                userId: authUser.uid
              })
            )
          }

          setAuthenticated(true)
        } else {
          dispatch(
            addUser({
              loggedIn: false,
              userName: '',
              userId: ''
            })
          )

          setAuthenticated(false)
        }
      })

      return (): void => {
        listener()
      }
    }, [setAuthenticated, firebase, dispatch, loggedIn, userId])
    return (
      <AuthUserContext.Provider value={authenticated}>
        <Component {...(props as Props)} />
      </AuthUserContext.Provider>
    )
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
