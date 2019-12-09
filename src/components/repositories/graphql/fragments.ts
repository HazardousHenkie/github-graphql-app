import gql from 'graphql-tag'

const repositoryFragment = gql`
  fragment repository on Repository {
    id
    name
    url
    description
    primaryLanguage {
      name
    }
    owner {
      login
      url
    }
    stargazers {
      totalCount
    }
    watchers {
      totalCount
    }
    viewerHasStarred
    viewerSubscription
  }
`
export default repositoryFragment
