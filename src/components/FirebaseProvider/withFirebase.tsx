import React from 'react'

import FirebaseContext from './context'

import FirebaseProviderProp from './interface'

const withFirebase = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithFirebase: React.FC<Omit<
    Props,
    keyof FirebaseProviderProp
  >> = props => {
    return (
      <FirebaseContext.Consumer>
        {(firebase): React.ReactNode => (
          <Component {...(props as Props)} firebase={firebase} />
        )}
      </FirebaseContext.Consumer>
    )
  }
  return WithFirebase
}

export default withFirebase
