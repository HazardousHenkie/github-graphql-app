import React from 'react'

export type RepositoriesProps = {
  repositories: Record<string, string>
}

const Repositories: React.FC<RepositoriesProps> = ({ repositories }) => {
  return <div className="repositories"></div>
}

export default React.memo(Repositories)
