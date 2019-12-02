import React from 'react'
import RepositoryItem from './repositoryItem'

import Grid from '@material-ui/core/Grid'

export type RepositoriesProps = {
  repositories: Record<string, any>
}

const Repositories: React.FC<RepositoriesProps> = ({ repositories }) => {
  return (
    <Grid className="repositories" container justify="center" spacing={2}>
      <Grid item xs={12}>
        Repositories
      </Grid>
      {repositories.edges.map(
        ({ node }: Record<string, Record<string, string>>) => (
          <Grid item xs={12} sm={6} md={4} key={node.id}>
            <RepositoryItem name={node.name} url={node.url} />
          </Grid>
        )
      )}
    </Grid>
  )
}

export default React.memo(Repositories)
