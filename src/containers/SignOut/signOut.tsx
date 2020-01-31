import React, { useContext } from 'react'

import Button from '@material-ui/core/Button'
import {
  withFirebase,
  FirebaseProviderProps
} from 'components/FirebaseProvider'

import { signOutString, signOutError } from 'utils/strings'

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
        setSnackbarState({ message: signOutError, variant: 'error' })
        error(signOutError, error)
      }
    )
  }

  return (
    <Button onClick={handleClick} variant="contained" color="secondary">
      {signOutString}
    </Button>
  )
}

export default withFirebase(SignOutButton)
