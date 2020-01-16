import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as routes from 'utils/routes'

import Login from '../Login'
import Home from '../Home'
import Organization from '../Organization'
import SignOut from '../SignOut'
import Error from '../Error/error'

const Routes: React.FC = () => {
  return (
    <div className="Routes">
      <Switch>
        <Route path={routes.login} exact component={Login} />
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.organization} exact component={Organization} />
        <Route path={routes.signOut} exact component={SignOut} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default Routes
