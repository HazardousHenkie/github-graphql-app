import React from 'react'

import { NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import * as routes from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  toolBar: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: '10px',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end'
    }
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    marginRight: '10px',
    marginBottom: '10px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
  }
}))

const MainMenu = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolBar}>
        <NavLink to={routes.home} className={classes.button}>
          Home
        </NavLink>

        <NavLink to={routes.organization} className={classes.button}>
          Organization search
        </NavLink>

        <NavLink to={routes.signOut} className={classes.button}>
          Sign Out
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default MainMenu
