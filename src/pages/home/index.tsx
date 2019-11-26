import React from 'react'

import { useSelector } from 'react-redux'

import { Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import SignInGithub from '../../components/login/signInGithub'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))

interface ReduxProvider {
  loggedIn: boolean
}

const Home: React.FC = () => {
  const classes = useStyles()
  const authenticated = useSelector(
    (state: Record<string, ReduxProvider>) => state.user.loggedIn
  )

  if (authenticated) {
    return <Redirect to="/profile/" />
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} md={5}>
        <div className="home">
          <header className="home__header">
            <Typography variant="h5" component="h2">
              Login
            </Typography>
          </header>

          <div className="home__signup_forms">
            <Paper className={`${classes.root} center-content`}>
              <SignInGithub />
            </Paper>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default React.memo(Home)
