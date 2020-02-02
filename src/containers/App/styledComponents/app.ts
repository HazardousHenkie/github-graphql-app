import styled from 'styled-components'

export type StyledAppProps = {
  authenticated: boolean
}

export const StyledApp = styled.div.attrs({
  className: 'App'
})<StyledAppProps>`
  min-height: 100%;
  display: grid;
  grid-template-rows: ${props =>
    props.authenticated ? '100px auto 80px;' : '0 auto 80px;'};

  @media (${props => props.theme.breakpoints.up.xs}) {
    grid-template-rows: ${props =>
      props.authenticated ? '74px auto 80px;' : '0 auto 80px;'};
  }
`
