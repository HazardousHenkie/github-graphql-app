import React from 'react'

import { useSelector } from 'react-redux'

import { Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import Background from '../../components/background'

import SignInGithub from '../../components/login/signInGithub'
import { home } from '../../constants/routes'

import './login.scss'

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
    <Grid
      className="login"
      container
      spacing={2}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={7} md={5}>
        <div>
          <Background />

          <div className="login__signup_forms">
            <Paper className={`${classes.root} center-content`}>
              <Typography className="login__title" variant="h5" component="h2">
                Login
              </Typography>

              <SignInGithub />
            </Paper>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default React.memo(Login)
