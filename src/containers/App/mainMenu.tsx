import React from 'react'

import {
  StyledAppBar,
  StyledToolbar,
  StyledNavLink
} from './styledComponents/mainMenu'

import { home, organization, signOut } from 'utils/routes'

const MainMenu: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledNavLink to={home}>Home</StyledNavLink>

        <StyledNavLink to={organization}>Organization search</StyledNavLink>

        <StyledNavLink to={signOut}>Sign Out</StyledNavLink>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default MainMenu
