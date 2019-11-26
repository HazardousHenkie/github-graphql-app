import React from 'react'
import { compose } from 'recompose'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { useSelector } from 'react-redux'

import Profile from '../../components/profile'

import { WithAuthorization } from '../../components/authentication'

interface ReduxProvider {
  userName: string
}

const ProfilePage: React.FC = () => {
  const { userName } = useSelector(
    (state: Record<string, ReduxProvider>) => state.user
  )

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} md={5}>
        <div className="profile">
          <header className="profile__header">
            <Typography variant="h5" component="h2">
              Welcome back, {userName}
            </Typography>
          </header>

          <Profile />
        </div>
      </Grid>
    </Grid>
  )
}

export default compose(React.memo, WithAuthorization)(ProfilePage)
