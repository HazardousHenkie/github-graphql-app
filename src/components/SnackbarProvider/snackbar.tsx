import React, { useContext } from 'react'

import CloseIcon from '@material-ui/icons/Close'
import { green } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import ErrorIcon from '@material-ui/icons/Error'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { makeStyles } from '@material-ui/core/styles'

import clsx from 'clsx'

import snackbarContext from './context'

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const CustomSnackbar: React.FC = () => {
  const classes = useStyles()
  const { snackbarState, setSnackbarState } = useContext(snackbarContext)

  let icon
  let iconClass

  if (snackbarState.variant === 'success') {
    icon = (
      <CheckCircleIcon className={clsx(classes.icon, classes.iconVariant)} />
    )

    iconClass = classes.success
  } else if (snackbarState.variant === 'error') {
    icon = <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} />
    iconClass = classes.error
  }

  const message = (
    <span id="client-snackbar" className={classes.message}>
      {icon}
      {snackbarState.message}
    </span>
  )

  const handleClose = (): void => {
    setSnackbarState({ message: '', variant: '' })
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={snackbarState.message !== ''}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={iconClass}
        message={message}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    </Snackbar>
  )
}

export default CustomSnackbar
