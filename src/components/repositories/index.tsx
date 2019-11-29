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
            <RepositoryItem {...node} />
          </div>
        )
      )}
    </div>
  )
}

export default React.memo(Repositories)
