// import React from 'react'

// import CircularProgress from '@material-ui/core/CircularProgress'

// const Loading: React.FC = () => {
//   return (
//     <div className="loading">
//       <CircularProgress />
//     </div>
//   )
// }

// export default React.memo(Loading)

import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Backdrop open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default React.memo(Loader)
