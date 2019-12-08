import gql from 'graphql-tag'
import repositoryFragment from '../components/repositories/fragments'

const getCurrentUserData = gql`
  {
    viewer {
      login
      websiteUrl
      location
      email
      company
      bio
      repositories(first: 5, orderBy: { direction: DESC, field: CREATED_AT }) {
        edges {
          node {
            ...repository
          }
        }
      }
    }
  }

  ${repositoryFragment}
`

export default getCurrentUserData
