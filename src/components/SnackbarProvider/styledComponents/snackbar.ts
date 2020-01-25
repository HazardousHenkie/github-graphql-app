import styled, { css } from 'styled-components'

import ErrorIcon from '@material-ui/icons/Error'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CloseIcon from '@material-ui/icons/Close'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import theme from 'styling/styledComponentsTheme'

export interface StyledSnackbarContentProps {
  color: string
}

export const IconFontSize = `
  font-size: 20px;
`

export const MainIconStyle = css`
  ${IconFontSize}
  opacity: 0.9;
  margin-right: 10px;
`

export const ErrorIconStyled = styled(ErrorIcon)`
  ${MainIconStyle}
`

export const CheckCircleIconStyled = styled(CheckCircleIcon)`
  ${MainIconStyle}
`

export const CloseIconStyled = styled(CloseIcon)`
  ${IconFontSize}
`

export const SnackBarContentStyled = styled(SnackbarContent)<
  StyledSnackbarContentProps
>`
  background-color: ${props =>
    props.color === 'success' ? theme.green : theme.errorRed};
`

export const MessageStyled = styled.span`
  display: flex;
  align-items: center;
`
