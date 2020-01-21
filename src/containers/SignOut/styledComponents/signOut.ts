import styled from 'styled-components'

import { centerContent } from 'styling/mixins'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export const PaperStyled = styled(Paper)`
  padding: 24px 16px;
  ${centerContent}
`

export const TypographyStyled = styled(Typography)`
  flex-grow: 1;
`

export const SubTypographyStyled = styled(Typography)`
  flex-grow: 1;
  margin-bottom: 15px;
`
