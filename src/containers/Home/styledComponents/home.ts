import styled from 'styled-components'

export const HomeStyled = styled.div`
  margin-top: -100px;

  @media (${props => props.theme.breakpoints.up.xs}) {
    margin-top: -74px;
  }
`
