import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import Background from 'components/BackgroundImage'

import SignInGithub from './signInGithub'

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

const Login: React.FC = () => {
  const classes = useStyles()

  return (
    <LoginStyled container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} sm={7} md={5}>
        <div>
          <Background />

          <LoginFormStyled>
            <Paper className={`${classes.root} center-content`}>
              <LoginTitleStyled variant="h2">Login</LoginTitleStyled>

              <SignInGithub />
            </Paper>
          </LoginFormStyled>
        </div>
      </Grid>
    </LoginStyled>
  )
}

export default React.memo(Login)
