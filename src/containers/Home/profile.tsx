import React from 'react'

import {
  ProfileStyled,
  ProfileTitleStyled,
  ProfileDescriptionStyled,
  ProfileIconListStyled,
  ProfileListItemStyled,
  ProfileListItemIconStyled
} from './styledComponents/profile'

import Email from '@material-ui/icons/Email'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Business from '@material-ui/icons/Business'

import { helloMessage } from 'utils/strings'

import Background from 'components/BackgroundImage'
import ScrollTo from 'components/ScrollTo'

export interface ProfileProps {
  user: Record<string, string>
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <ProfileStyled>
      <Background />

      <React.Fragment>
        <ProfileTitleStyled>
          {helloMessage}
          {user.login}!
        </ProfileTitleStyled>
        {user.bio && (
          <ProfileDescriptionStyled>{user.bio}</ProfileDescriptionStyled>
        )}
        <ProfileIconListStyled>
          {user.email && (
            <ProfileListItemStyled>
              <ProfileListItemIconStyled>
                <Email />
              </ProfileListItemIconStyled>
              {user.email}
            </ProfileListItemStyled>
          )}
          {user.company && (
            <ProfileListItemStyled>
              <ProfileListItemIconStyled>
                <Business />
              </ProfileListItemIconStyled>
              {user.company}
            </ProfileListItemStyled>
          )}
          {user.websiteUrl && (
            <ProfileListItemStyled>
              <ProfileListItemIconStyled>
                <ExitToApp />
              </ProfileListItemIconStyled>
              {user.websiteUrl}
            </ProfileListItemStyled>
          )}
        </ProfileIconListStyled>
      </React.Fragment>

      <ScrollTo scrollTo="repositories" />
    </ProfileStyled>
  )
}

export default Profile
