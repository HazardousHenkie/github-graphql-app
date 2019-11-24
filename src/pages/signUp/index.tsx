import React from 'react'
import Grid from '@material-ui/core/Grid'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import SignUpEmail from '../../components/signUp/signUpEmail'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))

const SignUp: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} md={5}>
        <div className="sign_up">
          <div className="sign_up__form">
            <Paper className={`${classes.root} center-content`}>
              <SignUpEmail />
            </Paper>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default React.memo(SignUp)
