import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import { useSelector } from 'react-redux'

import SignInGoogle from '../../components/login/signInGithub'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))

interface ReduxProvider {
  userName: string
  loggedIn: boolean
}

const Home: React.FC = () => {
  const { userName, loggedIn } = useSelector(
    (state: Record<string, ReduxProvider>) => state.user
  )

  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} md={5}>
        <div className="home">
          <header className="home__header">
            <Typography variant="h5" component="h2">
              {!loggedIn ? 'Welcome!' : `Welcome back, ${userName}!`}
            </Typography>
          </header>
          {!loggedIn && (
            <div className="home__signup_forms">
              <Paper className={`${classes.root} center-content`}>
                <SignInGoogle />
              </Paper>
            </div>
          )}
        </div>
      </Grid>
    </Grid>
  )
}

export default React.memo(Home)
