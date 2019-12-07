import React from 'react'
import { compose } from 'recompose'

import Profile from '../../components/profile'
import Loading from '../../components/loading'
import Repositories from '../../components/repositories'
import repositoryFragment from '../../components/repositories/fragments'
import { WithAuthorization } from '../../components/authentication'

import ErrorMessage from '../../components/errorMessage'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const getCurrentUserData = gql`
  {
    viewer {
      login
      websiteUrl
      location
      email
      company
      bio
      repositories(first: 5, orderBy: { direction: DESC, field: CREATED_AT }) {
        edges {
          node {
            ...repository
          }
        }
      }
    }
  }

  ${repositoryFragment}
`

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(getCurrentUserData)

  if (error) {
    return <ErrorMessage errorMessage={error.toString()} />
  }

  if (loading || !data) {
    return <Loading />
  }

  const { viewer } = data

  const information = {
    login: viewer.login,
    websiteUrl: viewer.websiteUrl,
    location: viewer.location,
    email: viewer.email,
    company: viewer.company,
    bio: viewer.bio
  }

  return (
    <React.Fragment>
      <Profile user={information} />

      <Repositories repositories={viewer.repositories} />
    </React.Fragment>
  )
}

export default compose(React.memo, WithAuthorization)(Home)
