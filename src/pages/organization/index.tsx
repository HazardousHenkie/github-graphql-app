import React, { useState } from 'react'
import { compose } from 'recompose'

import Search from '../../components/search'
import Loading from '../../components/loading'
import Repositories from '../../components/repositories'

import { WithAuthorization } from '../../components/authentication'

import ErrorMessage from '../../components/errorMessage'

import getRepositoriesForOrganization from '../../queries/organization'
import { useQuery } from '@apollo/react-hooks'

const Organization: React.FC = () => {
  const [search, setSearch] = useState([])

  const organizationName = 'thepracticaldev'

  // ignore for now fix later
  // @ts-ignore
  const noOrganization = organizationName === ''

  const { loading, error, data, fetchMore } = useQuery(
    getRepositoriesForOrganization,
    {
      variables: { organizationName },
      skip: noOrganization,
      notifyOnNetworkStatusChange: true
    }
  )

  if (noOrganization) {
    return <ErrorMessage errorMessage="No organization filled in." />
  }

  if (error) {
    return <ErrorMessage errorMessage={error.toString()} />
  }

  if (loading && !data) {
    return <Loading />
  }

  const { organization } = data

  return (
    //   add message about the organizations you can search for
    <React.Fragment>
      <Search setSearch={setSearch} />
      <Repositories
        loading={loading}
        fetchMore={fetchMore}
        repositories={organization.repositories}
        entry={'organization'}
      />
    </React.Fragment>
  )
}

export default compose(React.memo, WithAuthorization)(Organization)
