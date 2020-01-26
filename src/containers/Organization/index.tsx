import React, { useState } from 'react'
import { compose } from 'recompose'

import Search from 'components/Search'
import Loader from 'components/Loader'
import Repositories from 'components/RepositoriesList'
import InfoMessage from 'components/InformationMessage'

import { WithAuthorization } from 'components/AuthenticationProvider'
import Background from 'components/BackgroundImage'
import ErrorMessage from 'components/ErrorMessage'
import ScrollTo from 'components/ScrollTo'

import { oAuthMessage, noOrganizationError } from 'utils/strings'

import getRepositoriesForOrganization from './queries/organization'
import { useQuery } from '@apollo/react-hooks'

import { OrganizationStyled } from './styledComponents/organization'

const Organization: React.FC = () => {
  const [organizationName, setSearch] = useState('')

  const noOrganization = organizationName === ''

  const { loading, error, data, fetchMore } = useQuery(
    getRepositoriesForOrganization,
    {
      variables: { organizationName },
      skip: noOrganization,
      notifyOnNetworkStatusChange: true
    }
  )

  return (
    <React.Fragment>
      <Background />
      <OrganizationStyled
        compact={
          data && data.organization && data.organization.repositories
            ? true
            : false
        }
      >
        <InfoMessage infoMessage={oAuthMessage} />

        <Search setSearch={setSearch} />

        {noOrganization && <ErrorMessage errorMessage={noOrganizationError} />}

        {error && <ErrorMessage errorMessage={error.toString()} />}

        {data && <ScrollTo scrollTo="repositories" />}
      </OrganizationStyled>
      <div>
        {loading && <Loader />}

        {data && !noOrganization && (
          <Repositories
            loading={loading}
            fetchMore={fetchMore}
            repositories={data.organization.repositories}
            entry={'organization'}
          />
        )}
      </div>
    </React.Fragment>
  )
}

export default compose(React.memo, WithAuthorization)(Organization)
