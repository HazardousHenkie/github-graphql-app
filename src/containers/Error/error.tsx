import React from 'react'

import Typography from '@material-ui/core/Typography'

import './scss/error.scss'

const Error: React.FC = () => {
  return (
    <div className="error">
      <header className="error__header">
        <Typography variant="h1" component="h1">
          404 Page Not Found
        </Typography>
      </header>
    </div>
  )
}

export default React.memo(Error)
