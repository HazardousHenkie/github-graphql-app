import React from 'react'

import './scss/profile.scss'

import Email from '@material-ui/icons/Email'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Business from '@material-ui/icons/Business'

import Background from 'components/BackgroundImage'
import ScrollTo from 'components/ScrollToHashtag'

export interface ProfileProps {
  user: Record<string, string>
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="profile">
      <Background />

      <React.Fragment>
        <h1 className="profile__title">Hello, {user.login}!</h1>
        {user.bio && <p className="profile__description">{user.bio}</p>}
        <ul className="profile__icon_list">
          {user.email && (
            <li className="profile__list_item">
              <span className="profile__icon">
                <Email />
              </span>
              {user.email}
            </li>
          )}
          {user.company && (
            <li className="profile__list_item">
              <span className="profile__icon">
                <Business />
              </span>
              {user.company}
            </li>
          )}
          {user.websiteUrl && (
            <li className="profile__list_item">
              <span className="profile__icon">
                <ExitToApp />
              </span>
              {user.websiteUrl}
            </li>
          )}
        </ul>
      </React.Fragment>

      <ScrollTo scrollTo="repositories" />
    </div>
  )
}

export default Profile
