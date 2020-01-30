import React from 'react'

import Typography from '@material-ui/core/Typography'

import { ErrorPageDiv, StyledTypographyTitle } from './styledComponents/error'

interface ErrorInterface {
  errorCode: number
  errorMessage: string
}

const ErrorPage: React.FC<ErrorInterface> = ({
  errorCode = 404,
  errorMessage = "Page wasn't found"
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

export default React.memo(ErrorPage)
