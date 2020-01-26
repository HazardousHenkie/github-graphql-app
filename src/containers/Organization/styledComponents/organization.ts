import styled from 'styled-components'

export interface OrganizationStyledProps {
  compact: boolean
}

export const OrganizationStyled = styled.div<OrganizationStyledProps>`
  margin-top: -74px;
  margin-bottom: ${props => (props.compact ? '0;' : '-80px;')}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 2;
`
