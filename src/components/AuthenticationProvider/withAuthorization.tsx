import React, { useContext } from 'react'

import history from 'utils/history'
import { login } from 'utils/routes'

import AuthUserContext from './context'

const withAuthorization = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithAuthorization: React.FC<Props> = props => {
    // do we need this? yes since we don"t have authenticated routes
    // check where we go first here or the page

    // are we gonna check with the server if were all still authenticated?
    const { authenticated } = useContext(AuthUserContext)

    if (!authenticated) {
      history.push(login)
    }

    return (
      <AuthUserContext.Consumer>
        {(authenticated): React.ReactNode =>
          authenticated ? <Component {...(props as Props)} /> : ''
        }
      </AuthUserContext.Consumer>
    )
  }

  return WithAuthorization
}

export default withAuthorization
