import React from 'react'

import './errorMessage.scss'

interface ErrorProps {
  errorMessage: string
}

const ErrorMessage: React.FC<ErrorProps> = ({ errorMessage }) => {
  return <div className="error_message">{errorMessage}</div>
}

export default React.memo(ErrorMessage)
