import React, { useContext, createContext } from 'react'

interface Snackbar {
  message: string
  variant: string
}

interface SnackbarState {
  snackbarState: Snackbar
  setSnackbarState: React.Dispatch<React.SetStateAction<Snackbar>>
}

const defaultSnackbar: Snackbar = {
  message: '',
  variant: ''
}

const defaultSnackbarState: SnackbarState = {
  snackbarState: defaultSnackbar,
  setSnackbarState: (): void => {}
}

export const SnackbarContext = createContext<SnackbarState>(
  defaultSnackbarState
)

const useSnackbarContext = (): SnackbarState => {
  return useContext(SnackbarContext)
}

export default useSnackbarContext
