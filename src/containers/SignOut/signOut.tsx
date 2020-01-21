import React, { useContext } from 'react'

import Button from '@material-ui/core/Button'
import {
  withFirebase,
  FirebaseProviderProps
} from 'components/FirebaseProvider'

import { snackbarContext } from 'components/SnackbarProvider'
import { AuthUserContext } from 'components/AuthenticationProvider'

export const SignOutButton: React.FC<FirebaseProviderProps> = ({
  firebase
}) => {
  const { logOut } = useContext(AuthUserContext)
  const { setSnackbarState } = useContext(snackbarContext)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()

    firebase.doSignOut().then(
      () => {
        logOut()
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
