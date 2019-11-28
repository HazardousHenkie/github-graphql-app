import React from 'react'
import { compose } from 'recompose'

import Profile from '../../components/profile'
import Loading from '../../components/loading'
import Repositories from '../../components/repositories'
import { WithAuthorization } from '../../components/authentication'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const ProfilePage: React.FC = () => {
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
              descriptionHTML
            }
          }
        }
      }
    }
  `

  return (
    <div className="profile_page">
      <Query query={getCurrentUserData}>
        {({ data, loading }: Record<string, any>) => {
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
    </div>
  )
}

export default compose(React.memo, WithAuthorization)(ProfilePage)
