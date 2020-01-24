import React from 'react'

import AuthUserContext from './context'

const withAuthorization = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithAuthorization: React.FC<Props> = props => {
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
