import gql from 'graphql-tag'
import repositoryFragment from 'components/RepositoriesList/graphql/fragments'

const getRepositoriesForOrganization = gql`
  query($organizationName: String!, $cursor: String) {
    organization(login: $organizationName) {
      repositories(first: 6, after: $cursor) {
        edges {
          node {
            ...repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${repositoryFragment}
`

export default getRepositoriesForOrganization
