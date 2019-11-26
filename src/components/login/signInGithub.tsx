import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import Group from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/core/styles'
import * as routes from '../../constants/routes'
import { setUser } from '../../redux/actions'

import history from '../../helpers/history'
import { withFirebase, FirebaseProviderProps } from '../firebase'
import useSnackbarContext from '../snackbar/context'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}))

const SignInGithub: React.FC<FirebaseProviderProps> = ({ firebase }) => {
  const classes = useStyles()
  const { setSnackbarState } = useSnackbarContext()
  const dispatch = useDispatch()
  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    firebase
      .doSignInWithGithub()
      .then(signInResult => {
        dispatch(
          setUser({
            loggedIn: true,
            userName:
              signInResult.additionalUserInfo &&
              signInResult.additionalUserInfo.username
                ? signInResult.additionalUserInfo.username
                : '',
            userId: signInResult.user ? signInResult.user.uid : '',
            authToken: signInResult.credential
          })
        )

        setSnackbarState({ message: 'Logged in!', variant: 'success' })
        history.push(routes.profile)
      })
      .catch(error => {
        const { message } = error
        setSnackbarState({ message, variant: 'error' })
        history.push(routes.home)
      })
  }

  return (
    <div className="signin_github">
      <form onSubmit={onSubmit}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          <Group className={classes.leftIcon} />
          Sign In with Github
        </Button>
      </form>
    </div>
  )
}

export default withFirebase(SignInGithub)
