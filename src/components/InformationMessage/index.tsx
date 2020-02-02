import React from 'react'

import { Alert } from '@material-ui/lab'

import { InformationMessageWrapper } from './styledComponents/infoMessage'

type InfoProps = {
  infoMessage: string
}

const InfoMessage: React.FC<InfoProps> = ({ infoMessage }) => {
  return (
    <InformationMessageWrapper>
      <Alert severity="info">{infoMessage}</Alert>
    </InformationMessageWrapper>
  )
}

export default InfoMessage
