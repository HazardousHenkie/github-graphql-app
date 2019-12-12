import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  )
}

export default React.memo(Loading)
