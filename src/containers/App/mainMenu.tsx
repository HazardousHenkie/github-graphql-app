import React from 'react'

import {
  StyledAppBar,
  StyledToolbar,
  StyledNavLink
} from './styledComponents/mainMenu'

import * as routes from 'utils/routes'

const MainMenu: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledNavLink to={routes.home}>Home</StyledNavLink>

        <StyledNavLink to={routes.organization}>
          Organization search
        </StyledNavLink>

        <StyledNavLink to={routes.signOut}>Sign Out</StyledNavLink>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default MainMenu
