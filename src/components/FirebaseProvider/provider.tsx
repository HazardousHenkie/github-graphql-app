import React from 'react'

import FirebaseProviderProp from './interface'

import FirebaseContext from './context'

const FirebaseProvider: React.FC<FirebaseProviderProp> = ({
  firebase,
  children
}) => (
  <FirebaseContext.Provider value={firebase}>
    {children}
  </FirebaseContext.Provider>
)

export default FirebaseProvider
