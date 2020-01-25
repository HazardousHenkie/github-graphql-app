import styled from 'styled-components'

import { centerContent } from 'styling/mixins'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

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

export const PaperStyled = styled(Paper)`
  padding: 24px 16px;
  ${centerContent}
`
