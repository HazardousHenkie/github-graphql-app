import React from 'react'

import Typography from '@material-ui/core/Typography'

import { notFoundError } from 'utils/strings'

import { ErrorPageDiv, StyledTypographyTitle } from './styledComponents/error'

type ErrorType = {
  errorCode: number
  errorMessage: string
}

const ErrorPage: React.FC<ErrorType> = ({
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
