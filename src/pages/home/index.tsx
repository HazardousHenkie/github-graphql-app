import React from 'react'
import { compose } from 'recompose'

import Profile from '../../components/profile'
import Loading from '../../components/loading'
import Repositories from '../../components/repositories'
import { WithAuthorization } from '../../components/authentication'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const Home: React.FC = () => {
  const getCurrentUserData = gql`
    {
      viewer {
        login
        websiteUrl
        location
        email
        company
        bio
        repositories(
          first: 5
          orderBy: { direction: DESC, field: CREATED_AT }
        ) {
          edges {
            node {
              id
              name
              url
              description
              primaryLanguage {
                name
              }
              owner {
                login
                url
              }
              stargazers {
                totalCount
              }
              watchers {
                totalCount
              }
            }
          }
        }
      }
    }
  `

  return (
    <Query query={getCurrentUserData}>
      {({ data, loading, error }: Record<string, any>) => {
        if (error) {
          //   return setSnackbarState({
          //     message: error,
          //     variant: 'error'
          //   })
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
      }}
    </Query>
  )
}

export default compose(React.memo, WithAuthorization)(Home)
