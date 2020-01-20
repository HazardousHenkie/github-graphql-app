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
    // }
  }
  return WithFirebase
}

export default withFirebase

// const withFirebase = <Props extends object>(
//   Component: React.ComponentType<Props>
// ) => {
//   const WithFirebase: React.FC<Props> = props => {
//     return (
//       <FirebaseContext.Consumer>
//         {(firebase): React.ReactNode => (
//           <Component {...(props as Props)} firebase={firebase} />
//         )}
//       </FirebaseContext.Consumer>
//     )
//   }

//   return WithFirebase
// }

// export default withFirebase

// interface WithFirebaseProps {
//   firebase: Firebase
// }

// const withFirebase = <Props extends object>(
//   Component: React.ComponentType<Props>
// ): React.FC<Props> => {
//   const WithFirebase: React.FC<Props> = props => {
//     // const withFirebase = <P extends object>(Component: React.ComponentType<P>) =>
//     //   class WithFirebase extends React.Component<Omit<P, keyof WithFirebaseProps>> {
//     //     render() {
//     return (
//       <FirebaseContext.Consumer>
//         {(firebase): React.ReactNode => (
//           <Component {...(props as Props)} firebase={firebase} />
//         )}
//       </FirebaseContext.Consumer>
//     )
//     // }
//   }
//   return WithFirebase
// }

// export default withFirebase
