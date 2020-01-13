import styled from 'styled-components'

export interface StyledAppProps {
  authenticated: boolean
}

export const StyledApp = styled.div.attrs({
  className: 'App'
})<StyledAppProps>`
  min-height: 100%;
  display: grid;
  grid-template-rows: ${props =>
    props.authenticated ? '74px auto 80px;' : '0 auto 80px;'};
`
