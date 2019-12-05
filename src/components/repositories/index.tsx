import React from 'react'
import RepositoryItem from './repositoryItem'

import './repositories.scss'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

interface RepositoriesProps {
  repositories: {
    edges: [
      {
        id: any
        owner: Record<string, string>
        ownerUrl: string
        description: string
        primaryLanguage: Record<string, string>
        stargazers: Record<string, number>
        watchers: Record<string, number>
        name: string
        url: string
      }
    ]
  }
}

const Repositories: React.FC<RepositoriesProps> = ({ repositories }) => {
  return (
    <Grid
      className="repositories"
      container
      alignItems="stretch"
      justify="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <Typography className="repositories__title" variant="h3" component="h2">
          Repositories
        </Typography>
      </Grid>
      {repositories.edges.map(({ node }: any) => (
        <Grid item xs={12} sm={6} md={4} key={node.id}>
          <RepositoryItem
            ownerLogin={node.owner.login}
            ownerUrl={node.owner.url}
            description={node.description}
            primaryLanguage={node.primaryLanguage.name}
            stargazers={node.stargazers.totalCount}
            watchers={node.watchers.totalCount}
            name={node.name}
            url={node.url}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default React.memo(Repositories)
