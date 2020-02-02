import React, { createContext } from 'react'

type SnackbarState = {
  snackbarState: {
    message: string
    variant: string
  }
  setSnackbarState: React.Dispatch<
    React.SetStateAction<{
      message: string
      variant: string
    }>
  >
}

const snackbarContext = createContext<SnackbarState>({
  snackbarState: {
    message: '',
    variant: ''
  },
  setSnackbarState: (): void => {}
})

export default snackbarContext
