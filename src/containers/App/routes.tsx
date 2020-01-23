import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as routes from 'utils/routes'

import Loader from 'components/Loader'

const Login = lazy(() => import('../Login'))
const Home = lazy(() => import('../Home'))
const Organization = lazy(() => import('../Organization'))
const SignOut = lazy(() => import('../SignOut'))
const Error = lazy(() => import('../Home'))

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routes.login} exact component={Login} />
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.organization} exact component={Organization} />
        <Route path={routes.signOut} exact component={SignOut} />
        <Route component={Error} />
      </Switch>
    </Suspense>
  )
}

export default Routes
