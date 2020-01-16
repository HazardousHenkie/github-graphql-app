import React from 'react'
import { useDispatch } from 'react-redux'

import { withStyles, Theme, makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'
import { setUser } from 'redux/actions'
import { withFirebase, FirebaseProviderProps } from '../FirebaseProvider'
import useSnackbarContext from '../snackbar/context'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}))

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

export const CustomizedDialogs: React.FC<FirebaseProviderProps> = ({
  firebase
}) => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const { setSnackbarState } = useSnackbarContext()
  const classes = useStyles()

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
            dispatch(
              setUser({
                loggedIn: false,
                userName: '',
                userId: '',
                authToken: null
              })
            )
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
    <div>
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
        <MuiDialogTitle disableTypography className={classes.root}>
          <Typography variant="h6"> Remove Account</Typography>

          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={HandleClose}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>
            Are you sure you want to delete your account and all your data?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={HandleClose} color="primary">
            Cancel
          </Button>

          <Button onClick={HandleDelete} color="secondary">
            Delete Account
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withFirebase(CustomizedDialogs)
