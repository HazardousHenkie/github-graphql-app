import React, { useContext } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

import moment from 'moment'

import {
  withFirebase,
  FirebaseProviderProps
} from '../../components/FirebaseProvider'
import { snackbarContext } from 'components/SnackbarProvider'
import { AuthUserContext } from 'components/AuthenticationProvider'

import { DeleteButtonStyled } from './styledComponents/removeAccount'

export const RemoveAccount: React.FC<FirebaseProviderProps> = ({
  firebase
}) => {
  const { logOut } = useContext(AuthUserContext)
  const [open, setOpen] = React.useState(false)
  const { setSnackbarState } = useContext(snackbarContext)

  const HandleClickOpen = (): void => {
    setOpen(true)
  }

  const HandleClose = (): void => {
    setOpen(false)
  }

  const HandleDelete = (): void => {
    let lastLogin

    if (
      firebase.auth.currentUser &&
      firebase.auth.currentUser.metadata.lastSignInTime
    ) {
      lastLogin = moment(firebase.auth.currentUser.metadata.lastSignInTime)
    }
    const currentDateMinusOneMinute = moment().subtract(1, 'minutes')

    if (lastLogin && lastLogin.isBefore(currentDateMinusOneMinute)) {
      setSnackbarState({
        message: 'To remove your account you need to sign out and login again.',
        variant: 'error'
      })
    } else {
      if (firebase.auth.currentUser) {
        firebase.auth.currentUser
          .delete()
          .then(() => {
            logOut()
            setSnackbarState({
              message: 'Account was deleted!',
              variant: 'error'
            })
          })
          .catch(removeError => {
            setSnackbarState({ message: removeError.message, variant: 'error' })
          })
      }
    }
  }

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="secondary"
        aria-label="Delete Account"
        onClick={HandleClickOpen}
      >
        Delete Account
      </Button>

      <Dialog
        onClose={HandleClose}
        aria-labelledby="delete account"
        open={open}
      >
        <MuiDialogTitle disableTypography>
          <Typography variant="h6"> Remove Account</Typography>

          <DeleteButtonStyled aria-label="close" onClick={HandleClose}>
            <CloseIcon />
          </DeleteButtonStyled>
        </MuiDialogTitle>

        <MuiDialogContent dividers>
          <Typography gutterBottom>
            Are you sure you want to delete your account and all your data?
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button onClick={HandleClose} color="primary">
            Cancel
          </Button>

          <Button onClick={HandleDelete} color="secondary">
            Delete Account
          </Button>
        </MuiDialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default withFirebase(RemoveAccount)
