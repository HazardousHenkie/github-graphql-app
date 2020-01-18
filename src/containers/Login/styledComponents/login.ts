import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export const LoginStyled = styled(Grid)`
  height: calc(100vh - 80px);
`

export const LoginTitleStyled = styled(Typography)`
  font-size: 2rem;
  padding-bottom: 10px;
`

export const LoginFormStyled = styled.div`
  position: relative;
  z-index: 2;
`
