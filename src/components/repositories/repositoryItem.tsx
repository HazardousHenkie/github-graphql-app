import React from 'react'

interface RepositoriesProps {
  name: string
  url: string
}
// check how to desctructor ask or just do it seperately
const RepositoryItem: React.FC = ({ name, url }) => {
  return (
    <div className="repository_item">
      {name} {url}
    </div>
  )
}

export default React.memo(RepositoryItem)
