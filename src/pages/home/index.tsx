import React from 'react'
import { compose } from 'recompose'

import Profile from '../../components/profile'
import Loading from '../../components/loading'
import Repositories from '../../components/repositories'

import { WithAuthorization } from '../../components/authentication'

import ErrorMessage from '../../components/errorMessage'

import getCurrentUserData from '../../queries/user'
import { useQuery } from '@apollo/react-hooks'

const Home: React.FC = () => {
  const { loading, error, data, fetchMore } = useQuery(getCurrentUserData, {
    notifyOnNetworkStatusChange: true
  })

  if (error) {
    return <ErrorMessage errorMessage={error.toString()} />
  }

  if (!data || (loading && !data)) {
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

      <Repositories
        loading={loading}
        fetchMore={fetchMore}
        repositories={viewer.repositories}
        entry={'viewer'}
      />
    </React.Fragment>
  )
}

export default compose(React.memo, WithAuthorization)(Home)
