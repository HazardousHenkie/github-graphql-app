import styled from 'styled-components'

import { centerContent } from 'styling/mixins'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export const LogoutStyled = styled(Grid)`
  height: calc(100vh - 180px);
`

export const PaperStyled = styled(Paper)`
  padding: 24px 16px;
  ${centerContent}
`

export const LogoutFormStyled = styled.div`
  position: relative;
  z-index: 2;
`

export const TypographyStyled = styled(Typography)`
  flex-grow: 1;
  font-size: 1.75rem;
  padding-bottom: 15px;
`

export const SubTypographyStyled = styled(Typography)`
  font-size: 1.125rem;
  text-align: center;
  flex-grow: 1;
  margin-bottom: 15px;
`

export const SubTypographyPaddingStyled = styled(Typography)`
  font-size: 0.875rem;
  flex-grow: 1;
  text-align: center;
  margin: 20px 0 10px;
`
