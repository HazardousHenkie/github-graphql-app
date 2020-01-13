import React from 'react'

import Typography from '@material-ui/core/Typography'

import { StyledError } from './styledComponents/error'

// change to generic error page
const Error: React.FC = () => {
  return (
    <StyledError>
      <Typography variant="h1" component="h1">
        404 Page Not Found
      </Typography>
    </StyledError>
  )
}

export default React.memo(Error)

// interface ErrorInterface {
//   errorCode: number;
//   errorMessage: string;
// }

// const ErrorPage: React.FC<ErrorInterface> = ({
//   errorCode = 404,
//   errorMessage = 'ページが見つかりませんでした',
// }) => {
//   return (
//     <ErrorPageDiv>
//       <StyledTypographyTitle align="center" variant="h1">
//         {errorCode}
//       </StyledTypographyTitle>

//       <Typography align="center" variant="body1">
//         {errorMessage}
//       </Typography>
//     </ErrorPageDiv>
//   );
// };

// export default React.memo(ErrorPage);
