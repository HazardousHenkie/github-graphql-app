import React from 'react'
import RepositoryItem from './repositoryItem'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export type RepositoriesProps = {
  repositories: Record<string, any>
}

const Repositories: React.FC<RepositoriesProps> = ({ repositories }) => {
  return (
    <Grid className="repositories" container justify="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2">
          Repositories
        </Typography>
      </Grid>
      {repositories.edges.map(
        // any or object
        ({ node }: Record<string, Record<string, any>>) => (
          <Grid item xs={12} sm={6} md={4} key={node.id}>
            check if there is a better way to push data to it
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
        )
      )}
    </Grid>
  )
}

export default React.memo(Repositories)
