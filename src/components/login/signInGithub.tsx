import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import Group from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/core/styles'
import * as routes from '../../constants/routes'
import { addUser } from '../../redux/actions'

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

const SignInGoogle: React.FC<FirebaseProviderProps> = ({ firebase }) => {
  const classes = useStyles()
  const { setSnackbarState } = useSnackbarContext()
  const dispatch = useDispatch()
  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    firebase
      .doSignInWithGoogle()
      .then(signInResult => {
        if (
          signInResult.user &&
          signInResult.additionalUserInfo &&
          signInResult.additionalUserInfo.isNewUser
        ) {
          dispatch(
            addUser({
              loggedIn: true,
              userName: signInResult.user.displayName
                ? signInResult.user.displayName
                : '',
              userId: signInResult.user.uid
            })
          )
        } else {
          if (signInResult.user) {
            dispatch(
              addUser({
                loggedIn: true,
                userName: signInResult.user.displayName
                  ? signInResult.user.displayName
                  : '',
                userId: signInResult.user ? signInResult.user.uid : ''
              })
            )
          }
        }

        setSnackbarState({ message: 'Logged in!', variant: 'success' })
        history.push(routes.home)
      })
      .catch(error => {
        const { message } = error
        setSnackbarState({ message, variant: 'error' })
        history.push(routes.home)
      })
  }

  return (
    <div className="signin_google">
      <p className="signin_google__text">
        or alternatively Sign In with Google!
      </p>
      <form onSubmit={onSubmit}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          <Group className={classes.leftIcon} />
          Sign In with Google
        </Button>
      </form>
    </div>
  )
}

export default withFirebase(SignInGoogle)
