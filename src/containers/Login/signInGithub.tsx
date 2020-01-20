import React, { useContext } from 'react'

import Button from '@material-ui/core/Button'
import Group from '@material-ui/icons/Group'

import {
  withFirebase,
  FirebaseProviderProps
} from 'components/FirebaseProvider'
import { snackbarContext } from 'components/SnackbarProvider'
import { AuthUserContext } from 'components/AuthenticationProvider'

const SignInGithub: React.FC<FirebaseProviderProps> = ({ firebase }) => {
  const { logIn } = useContext(AuthUserContext)
  const { setSnackbarState } = useContext(snackbarContext)
  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    firebase
      .doSignInWithGithub()
      .then(signInResult => {
        logIn(signInResult)
      })
      .catch(error => {
        const { message } = error
        setSnackbarState({ message, variant: 'error' })
      })
  }

  return (
    <div className="signin_github">
      <form onSubmit={onSubmit}>
        <Button type="submit" variant="contained" color="secondary">
          <Group />
          Sign In with Github
        </Button>
      </form>
    </div>
  )
}

export default withFirebase(SignInGithub)
