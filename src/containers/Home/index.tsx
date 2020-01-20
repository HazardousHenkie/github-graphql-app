import React from 'react'
import { compose } from 'recompose'

import Profile from './profile'
import Loader from 'components/Loader'
import Repositories from 'components/RepositoriesList'

import { WithAuthorization } from 'components/AuthenticationProvider'

import ErrorMessage from 'components/ErrorMessage'

import getCurrentUserData from 'containers/Home/queries/user'
import { useQuery } from '@apollo/react-hooks'

import { HomeStyled } from './styledComponents/home'

const Home: React.FC = () => {
  const { loading, error, data, fetchMore } = useQuery(getCurrentUserData, {
    notifyOnNetworkStatusChange: true
  })

  if (error) {
    return <ErrorMessage errorMessage={error.toString()} />
  }

  if (!data || (loading && !data)) {
    return <Loader />
  }

  const information = {
    login: data.viewer.login,
    websiteUrl: data.viewer.websiteUrl,
    location: data.viewer.location,
    email: data.viewer.email,
    company: data.viewer.company,
    bio: data.viewer.bio
  }

  return (
    <HomeStyled>
      <Profile user={information} />

      <Repositories
        loading={loading}
        fetchMore={fetchMore}
        repositories={data.viewer.repositories}
        entry={'viewer'}
      />
    </HomeStyled>
  )
}

export default compose(React.memo, WithAuthorization)(Home)
