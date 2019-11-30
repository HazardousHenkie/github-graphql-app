import React from 'react'

interface RepositoriesProps {
  name: string
  url: string
}

const RepositoryItem: React.FC<RepositoriesProps> = (name, url) => {
  return (
    <div className="repository_item">
      {name} {url}
    </div>
  )
}

export default React.memo(RepositoryItem)
