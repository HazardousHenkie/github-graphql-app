import React from 'react'
import RepositoryItem from './repositoryItem'

import './scss/repositories.scss'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import FetchMore from '../../components/fetchMore'

interface RepositoriesProps {
  loading: boolean
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
        viewerHasStarred: boolean
      }
    ]
    pageInfo: {
      endCursor: string
      hasNextPage: boolean
    }
  }
  fetchMore: any
  entry: string
}

const Repositories: React.FC<RepositoriesProps> = ({
  loading,
  repositories,
  fetchMore,
  entry
}) => {
  //　maybe don't have => entry here but have it inside there with previousresult
  const updateQuery = (entry: string) => (
    previousResult: Record<string, any>,
    { fetchMoreResult }: Record<string, any>
  ) => {
    if (!fetchMoreResult) {
      return previousResult
    }

    return {
      ...previousResult,
      [entry]: {
        ...previousResult[entry],
        repositories: {
          ...previousResult[entry].repositories,
          ...fetchMoreResult[entry].repositories,
          edges: [
            ...previousResult[entry].repositories.edges,
            ...fetchMoreResult[entry].repositories.edges
          ]
        }
      }
    }
  }

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
      {repositories.edges.map(({ node }: Record<string, any>) => (
        <Grid item xs={12} sm={6} md={4} key={node.id}>
          <RepositoryItem
            id={node.id}
            ownerLogin={node.owner.login}
            ownerUrl={node.owner.url}
            description={node.description}
            primaryLanguage={
              node.primaryLanguage !== null ? node.primaryLanguage.name : ''
            }
            stargazers={node.stargazers.totalCount}
            watchers={node.watchers.totalCount}
            name={node.name}
            url={node.url}
            viewerHasStarred={node.viewerHasStarred}
            viewerSubscription={node.viewerSubscription}
          />
        </Grid>
      ))}

      <Grid item>
        <FetchMore
          loading={loading}
          hasNextPage={repositories.pageInfo.hasNextPage}
          variables={{
            cursor: repositories.pageInfo.endCursor
          }}
          updateQuery={updateQuery(entry)}
          fetchMore={fetchMore}
        >
          Repositories
        </FetchMore>
      </Grid>
    </Grid>
  )
}

export default React.memo(Repositories)
