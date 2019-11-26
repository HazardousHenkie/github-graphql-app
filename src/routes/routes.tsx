import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as routes from '../constants/routes'

import Home from '../pages/home'
import ProfilePage from '../pages/profile'
import SignOut from '../pages/signOut'
import Error from '../pages/error'

const Routes: React.FC = () => {
  return (
    <div className="Routes">
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.profile} exact component={ProfilePage} />
        <Route path={routes.signOut} exact component={SignOut} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default Routes
