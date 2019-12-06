import React from 'react'

import './errorMessage.scss'

interface ErrorProps {
  errorMessage: string
}

const ErrorMessage: React.FC<ErrorProps> = ({ errorMessage }) => {
  return <div className="error_message">{errorMessage.toString()}</div>
}

export default ErrorMessage
