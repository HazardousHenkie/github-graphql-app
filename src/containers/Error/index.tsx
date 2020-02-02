import React from 'react'

import Typography from '@material-ui/core/Typography'

import { notFoundError } from 'utils/strings'

import { ErrorPageDiv, StyledTypographyTitle } from './styledComponents/error'

interface ErrorInterface {
  errorCode: number
  errorMessage: string
}

const ErrorPage: React.FC<ErrorInterface> = ({
  errorCode = 404,
  errorMessage = notFoundError
}) => {
  return (
    <ErrorPageDiv>
      <StyledTypographyTitle align="center" variant="h1">
        {errorCode}
      </StyledTypographyTitle>

      <Typography align="center" variant="body1">
        {errorMessage}
      </Typography>
    </ErrorPageDiv>
  )
}

export default ErrorPage
