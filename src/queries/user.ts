import gql from 'graphql-tag'
import repositoryFragment from '../components/repositories/graphql/fragments'

const getCurrentUserData = gql`
  query($cursor: String) {
    viewer {
      login
      websiteUrl
      location
      email
      company
      bio

      repositories(
        first: 6
        orderBy: { direction: DESC, field: CREATED_AT }
        after: $cursor
      ) {
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

export default getCurrentUserData
