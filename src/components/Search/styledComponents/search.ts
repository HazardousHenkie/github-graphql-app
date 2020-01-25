import styled from 'styled-components'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const TextFieldStyled = styled(TextField)`
  width: calc(100% - 88px);

  input {
    background: ${props => props.theme.white};
    border-radius: 4px;
  }
`

export const ButtonStyled = styled(Button)`
  height: 55px;
  margin: 16px 0;
`
