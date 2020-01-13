import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export const StyledAppBar = styled(AppBar)`
  position: relative;
  background-color: transparent;
  box-shadow: none;
`

export const StyledToolbar = styled(Toolbar)`
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  @media (${props => props.theme.breakpoints.up.sm}) {
    justify-content: flex-end;
  }
`

export const StyledNavLink = styled(NavLink)`
  background-color: rgba(0, 0, 0, 0.08);
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 7px;
  &:hover: {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
