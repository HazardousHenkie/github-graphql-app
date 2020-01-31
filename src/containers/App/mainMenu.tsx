import React from 'react'

import {
  StyledAppBar,
  StyledToolbar,
  StyledNavLink
} from './styledComponents/mainMenu'

import { homeString, organizationSearch, signOutString } from 'utils/strings'
import { home, organization, signOut } from 'utils/routes'

const MainMenu: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledNavLink to={home}>{homeString}</StyledNavLink>

        <StyledNavLink to={organization}>{organizationSearch}</StyledNavLink>

        <StyledNavLink to={signOut}>{signOutString}</StyledNavLink>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default MainMenu
