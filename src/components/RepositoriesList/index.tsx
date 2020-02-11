import React from 'react'
import RepositoryItem from './repositoryItem'

import {
  RepositoriesStyled,
  RepositoriesTitleStyled
} from './styledComponents/repositories'

import Grid from '@material-ui/core/Grid'

import FetchMore from '../FetchMore'

import { repositoriesString } from 'utils/strings'

type RepositoriesProps = {
  loading: boolean
  repositories: {
    edges: [
      {
        id: number
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
    <RepositoriesStyled
      id="repositories"
      container
      alignItems="stretch"
      justify="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <RepositoriesTitleStyled variant="h3">
          {repositoriesString}
        </RepositoriesTitleStyled>
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
          {repositoriesString}
        </FetchMore>
      </Grid>
    </RepositoriesStyled>
  )
}

export default React.memo(Repositories)
