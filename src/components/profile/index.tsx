import React from 'react'

import './profile.scss'

import Loading from '../loading'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const Profile: React.FC = () => {
  const GET_CURRENT_USER = gql`
    {
      viewer {
        login
        websiteUrl
        location
        email
        company
        bio
      }
    }
  `

  return (
    <div className="profile">
      <Query query={GET_CURRENT_USER}>
        {({ data, loading }: Record<string, any>) => {
          if (loading || !data) {
            return <Loading />
          }

          const { viewer } = data
          return (
            <div>
              name: {viewer.login}, location: {viewer.location}, email
              {viewer.email}, company: {viewer.company}, website:
              {viewer.websiteUrl} bio: {viewer.bio}
            </div>
          )
        }}
      </Query>
    </div>
  )
}

export default Profile
