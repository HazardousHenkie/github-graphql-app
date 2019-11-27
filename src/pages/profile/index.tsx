import React from 'react'
import { compose } from 'recompose'

import Profile from '../../components/profile'

import { WithAuthorization } from '../../components/authentication'

const ProfilePage: React.FC = () => {
  return (
    <div className="profile_page">
      <Profile />
    </div>
  )
}

export default compose(React.memo, WithAuthorization)(ProfilePage)
