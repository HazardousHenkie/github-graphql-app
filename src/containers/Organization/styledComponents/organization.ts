import styled from 'styled-components'

export interface OrganizationStyledProps {
  compact: boolean
}

export const OrganizationStyled = styled.div<OrganizationStyledProps>`
  margin-bottom: ${props => (props.compact ? '0;' : '-80px;')}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 2;
  margin-top: -100px;

  @media (${props => props.theme.breakpoints.up.xs}) {
    margin-top: -74px;
  }
`
