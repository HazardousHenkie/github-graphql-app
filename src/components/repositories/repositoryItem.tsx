import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    width: '100%'
  },
  title: {
    fontSize: 14
  }
})

interface RepositoriesProps {
  name: string
  url: string
}

const RepositoryItem: React.FC<RepositoriesProps> = ({ name, url }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {url}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default React.memo(RepositoryItem)
