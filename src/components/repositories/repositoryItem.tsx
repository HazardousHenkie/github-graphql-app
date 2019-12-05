import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

interface RepositoriesProps {
  ownerLogin: string
  ownerUrl: string
  description: string
  primaryLanguage: string
  stargazers: number
  watchers: number
  name: string
  url: string
}

const RepositoryItem: React.FC<RepositoriesProps> = ({
  name,
  url,
  ownerLogin,
  ownerUrl,
  description,
  primaryLanguage,
  stargazers,
  watchers
}) => {
  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Watchers {watchers}
        </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Stars {stargazers}
        </Button>
        {primaryLanguage} {description} {ownerLogin} {ownerUrl}
        <Typography variant="body2" component="p">
          {url}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default React.memo(RepositoryItem)
