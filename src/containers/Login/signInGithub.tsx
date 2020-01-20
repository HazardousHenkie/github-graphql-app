import React, { useContext } from 'react'

import Button from '@material-ui/core/Button'
import Group from '@material-ui/icons/Group'
import { home } from 'utils/routes'

import history from 'utils/history'

import {
  withFirebase,
  FirebaseProviderProps
} from 'components/FirebaseProvider'
import useSnackbarContext from 'components/snackbar/context'
import { AuthUserContext } from 'components/AuthenticationProvider'

const SignInGithub: React.FC<FirebaseProviderProps> = ({ firebase }) => {
  const { logIn } = useContext(AuthUserContext)
  const { setSnackbarState } = useSnackbarContext()
  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    firebase
      .doSignInWithGithub()
      .then(signInResult => {
        logIn(signInResult)

        setSnackbarState({ message: 'Logged in!', variant: 'success' })
        history.push(home)
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
