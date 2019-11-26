import React from 'react'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const Profile: React.FC = () => {
  const GET_CURRENT_USER = gql`
    {
      viewer {
        login
        name
      }
    }
  `

  return (
    <div className="profile">
      <Query query={GET_CURRENT_USER}>
        {({ data, loading }: Record<string, any>) => {
          if (loading || !data) {
            return <div>Loading ...</div>
          }

          const { viewer } = data
          return <div>{viewer.login}</div>
        }}
      </Query>
    </div>
  )
}

export default Profile
