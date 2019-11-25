import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as routes from '../constants/routes'

import Home from '../pages/home'
import LogOut from '../pages/logOut'
import Error from '../pages/error'

const Routes: React.FC = () => {
  return (
    <div className="Routes">
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.signOut} exact component={LogOut} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default Routes
