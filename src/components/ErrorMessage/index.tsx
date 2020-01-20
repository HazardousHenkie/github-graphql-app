import React from 'react'

import { Alert } from '@material-ui/lab'

import { ErrorMessageWrapper } from './styledComponents/errorMessage'

interface ErrorProps {
  errorMessage: string
}

const ErrorMessage: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <ErrorMessageWrapper>
      <Alert severity="error">{errorMessage}</Alert>
    </ErrorMessageWrapper>
  )
}

export default React.memo(ErrorMessage)