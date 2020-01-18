import React from 'react'

import { useSelector } from 'react-redux'

import { Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import Background from 'components/BackgroundImage'

import SignInGithub from './signInGithub'
import { home } from 'utils/routes'

import {
  LoginStyled,
  LoginTitleStyled,
  LoginFormStyled
} from './styledComponents/login'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))

interface ReduxProvider {
  loggedIn: boolean
}

const Login: React.FC = () => {
  const classes = useStyles()
  const authenticated = useSelector(
    (state: Record<string, ReduxProvider>) => state.user.loggedIn
  )

  if (authenticated) {
    return <Redirect to={home} />
  }

  return (
    <LoginStyled container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} sm={7} md={5}>
        <div>
          <Background />

          <LoginFormStyled>
            <Paper className={`${classes.root} center-content`}>
              {/* variant="h5" component="h2" */}
              <LoginTitleStyled variant="h5" component="h2">
                Login
              </LoginTitleStyled>

              <SignInGithub />
            </Paper>
          </LoginFormStyled>
        </div>
      </Grid>
    </LoginStyled>
  )
}

export default React.memo(Login)
