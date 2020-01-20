import React, { useContext } from 'react'

import Button from '@material-ui/core/Button'
import {
  withFirebase,
  FirebaseProviderProps
} from 'components/FirebaseProvider'

import * as routes from 'utils/routes'
import history from 'utils/history'

import useSnackbarContext from 'components/snackbar/context'
import { AuthUserContext } from 'components/AuthenticationProvider'

export const SignOutButton: React.FC<FirebaseProviderProps> = ({
  firebase
}) => {
  const { logOut } = useContext(AuthUserContext)
  const { setSnackbarState } = useSnackbarContext()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()

    firebase.doSignOut().then(
      () => {
        logOut()

        setSnackbarState({ message: 'Logged out', variant: 'error' })
        history.push(routes.login)
      },
      error => {
        setSnackbarState({ message: 'Sign Out Error', variant: 'error' })
        error('Sign Out Error', error)
      }
    )
  }

  return (
    <Button onClick={handleClick} variant="contained" color="secondary">
      Sign Out
    </Button>
  )
}

export default withFirebase(SignOutButton)
