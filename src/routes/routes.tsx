import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as routes from '../constants/routes'

import Login from '../pages/login'
import Home from '../pages/home'
import SignOut from '../pages/signOut'
import Error from '../pages/error'

const Routes: React.FC = () => {
  return (
    <div className="Routes">
      <Switch>
        <Route path={routes.login} exact component={Login} />
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.signOut} exact component={SignOut} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default Routes
