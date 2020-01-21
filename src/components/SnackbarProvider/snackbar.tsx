import React, { useContext } from 'react'

import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

import {
  CheckCircleIconStyled,
  ErrorIconStyled,
  MessageStyled,
  SnackBarContentStyled,
  CloseIconStyled
} from './styledComponents/snackbar'

import snackbarContext from './context'

const CustomSnackbar: React.FC = () => {
  const { snackbarState, setSnackbarState } = useContext(snackbarContext)

  const message = (
    <MessageStyled>
      {snackbarState.variant === 'success' ? (
        <CheckCircleIconStyled />
      ) : (
        <ErrorIconStyled />
      )}
      {snackbarState.message}
    </MessageStyled>
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
      <SnackBarContentStyled
        color={snackbarState.variant}
        message={message}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIconStyled />
          </IconButton>
        ]}
      />
    </Snackbar>
  )
}

export default CustomSnackbar
