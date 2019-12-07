import React from 'react'

import './resporityItem.scss'

import { useMutation } from '@apollo/react-hooks'
import { starRepository, unstarRepository } from './mutations'
import repositoryFragment from './fragments'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import StarIcon from '@material-ui/icons/Star'
import VisibilityIcon from '@material-ui/icons/Visibility'

interface RepositoriesProps {
  id: number
  ownerLogin: string
  ownerUrl: string
  description: string
  primaryLanguage: string
  stargazers: number
  watchers: number
  name: string
  url: string
  viewerHasStarred: boolean
}

const RepositoryItem: React.FC<RepositoriesProps> = ({
  id,
  name,
  url,
  ownerLogin,
  ownerUrl,
  description,
  primaryLanguage,
  stargazers,
  watchers,
  viewerHasStarred
}) => {
  const [addStar] = useMutation(starRepository)
  const [removeStar] = useMutation(unstarRepository, { variables: { id } })

  return (
    <Card className="repository_card">
      <CardContent>
        <Typography
          className="repository_card__title"
          variant="h5"
          component="h3"
        >
          {name}
        </Typography>

        <Typography variant="body2" component="p">
          {description}
        </Typography>

        <div className="repository_card__buttons">
          <Button
            className="repository_card__button"
            variant="contained"
            color="secondary"
            startIcon={<VisibilityIcon />}
          >
            Watchers {watchers}
          </Button>
          {!viewerHasStarred ? (
            <Button
              className="repository_card__button"
              variant="contained"
              color="secondary"
              onClick={() =>
                addStar({
                  variables: { id },
                  optimisticResponse: {
                    __typename: 'Mutation',
                    addStar: {
                      __typename: 'Repository',
                      id,
                      viewerHasStarred: !viewerHasStarred
                    }
                  },
                  update: (
                    proxy,
                    {
                      data: {
                        addStar: {
                          starrable: { id, viewerHasStarred }
                        }
                      }
                    }
                  ) => {
                    const data: any = proxy.readFragment({
                      id: `Repository:${id}`,
                      fragment: repositoryFragment
                    })

                    if (data) {
                      let { totalCount } = data.stargazers
                      totalCount = viewerHasStarred
                        ? totalCount + 1
                        : totalCount - 1
                      proxy.writeFragment({
                        id: `Repository:${id}`,
                        fragment: repositoryFragment,
                        data: {
                          ...data,
                          stargazers: { ...data.stargazers, totalCount }
                        }
                      })
                    }
                  }
                })
              }
              startIcon={<StarIcon />}
            >
              Stars {stargazers}
            </Button>
          ) : (
            <Button
              className="repository_card__button"
              variant="contained"
              color="primary"
              onClick={() => removeStar()}
              startIcon={<StarIcon />}
            >
              Stars {stargazers}
            </Button>
          )}
        </div>

        <ul className="repository_card__list">
          <li>Language: {primaryLanguage}</li>
          <li>
            Owner:
            <a className="repository_card__link" href={ownerUrl}>
              {ownerLogin}
            </a>
          </li>
        </ul>

        <div className="repository_card__buttons">
          <Button variant="contained" color="primary" href={url}>
            Check on github
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default React.memo(RepositoryItem)
