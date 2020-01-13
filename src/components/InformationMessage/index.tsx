import React from 'react'

import './infoMessage.scss'

interface InfoProps {
  infoMessage: string
}

const InfoMessage: React.FC<InfoProps> = ({ infoMessage }) => {
  return <div className="information_message">{infoMessage}</div>
}

export default React.memo(InfoMessage)
