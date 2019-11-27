import React from 'react'

import './profile.scss'

import Loading from '../loading'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Email from '@material-ui/icons/Email'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Business from '@material-ui/icons/Business'

import Background from '../background'

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
      <Background />
      <Query query={GET_CURRENT_USER}>
        {({ data, loading }: Record<string, any>) => {
          if (loading || !data) {
            return <Loading />
          }

          const { viewer } = data
          return (
            <React.Fragment>
              <h1 className="profile__title">Hello, {viewer.login}!</h1>
              {viewer.bio && (
                <p className="profile__description">{viewer.bio}</p>
              )}
              <ul className="profile__icon_list">
                {viewer.email && (
                  <li className="profile__list_item">
                    <span className="profile__icon">
                      <Email />
                    </span>
                    {viewer.email}
                  </li>
                )}
                {viewer.company && (
                  <li className="profile__list_item">
                    <span className="profile__icon">
                      <Business />
                    </span>
                    {viewer.company}
                  </li>
                )}
                {viewer.websiteUrl && (
                  <li className="profile__list_item">
                    <span className="profile__icon">
                      <ExitToApp />
                    </span>
                    {viewer.websiteUrl}
                  </li>
                )}
              </ul>
            </React.Fragment>
          )
        }}
      </Query>
    </div>
  )
}

export default Profile
