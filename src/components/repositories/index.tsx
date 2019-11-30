import React from 'react'
import RepositoryItem from './repositoryItem'

export type RepositoriesProps = {
  repositories: Record<string, any>
}

const Repositories: React.FC<RepositoriesProps> = ({ repositories }) => {
  return (
    <div className="repositories">
      {repositories.edges.map(
        ({ node }: Record<string, Record<string, string>>) => (
          <div key={node.id} className="RepositoryItem">
            <RepositoryItem name={node.name} url={node.url} />
          </div>
        )
      )}
    </div>
  )
}

export default React.memo(Repositories)
