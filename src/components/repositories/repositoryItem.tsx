import React from 'react'

import './scss/resporityItem.scss'

import { useMutation } from '@apollo/react-hooks'
import {
  starRepository,
  unstarRepository,
  watchRepository
} from './graphql/mutations'
import repositoryFragment from './graphql/fragments'
import { DataProxy } from 'apollo-cache'

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
  viewerSubscription: string
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
  viewerHasStarred,
  viewerSubscription
}) => {
  const [addStar] = useMutation(starRepository)
  const [removeStar] = useMutation(unstarRepository)
  const [updateSubscription] = useMutation(watchRepository)

  const getUpdatedStarData = (
    proxy: DataProxy,
    id: number,
    viewerHasStarred: boolean
  ) => {
    const data: any = proxy.readFragment({
      id: `Repository:${id}`,
      fragment: repositoryFragment
    })

    let { totalCount } = data.stargazers
    totalCount = viewerHasStarred ? totalCount + 1 : totalCount - 1
    proxy.writeFragment({
      id: `Repository:${id}`,
      fragment: repositoryFragment,
      data: {
        ...data,
        stargazers: { ...data.stargazers, totalCount }
      }
    })
  }

  const viewerSubscriptions = {
    subscribed: 'SUBSCRIBED',
    unsubscribed: 'UNSUBSCRIBED'
  }
  const isWatch = (viewerSubscription: string): boolean =>
    viewerSubscription === viewerSubscriptions.subscribed

  const watchRepositoryWrapper = () =>
    updateSubscription({
      variables: {
        id,
        viewerSubscription: isWatch(viewerSubscription)
          ? viewerSubscriptions.unsubscribed
          : viewerSubscriptions.subscribed
      },
      optimisticResponse: {
        updateSubscription: {
          __typename: 'Mutation',
          subscribable: {
            __typename: 'Repository',
            id,
            viewerSubscription: isWatch(viewerSubscription)
              ? viewerSubscriptions.unsubscribed
              : viewerSubscriptions.subscribed
          }
        }
      },
      update: (
        proxy,
        {
          data: {
            updateSubscription: {
              subscribable: { id, viewerSubscription }
            }
          }
        }
      ) => {
        const data: any = proxy.readFragment({
          id: `Repository:${id}`,
          fragment: repositoryFragment
        })

        let { totalCount } = data.watchers
        totalCount =
          viewerSubscription === viewerSubscriptions.subscribed
            ? totalCount + 1
            : totalCount - 1

        proxy.writeFragment({
          id: `Repository:${id}`,
          fragment: repositoryFragment,
          data: {
            ...data,
            watchers: { ...data.watchers, totalCount }
          }
        })
      }
    })

  const addStarWrapper = () =>
    addStar({
      variables: { id },
      optimisticResponse: {
        addStar: {
          __typename: 'Mutation',
          starrable: {
            __typename: 'Repository',
            id,
            viewerHasStarred: !viewerHasStarred
          }
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
      ) => getUpdatedStarData(proxy, id, viewerHasStarred)
    })

  const removeStarWrapper = () =>
    removeStar({
      variables: { id },
      optimisticResponse: {
        removeStar: {
          __typename: 'Mutation',

          starrable: {
            __typename: 'Repository',
            id,
            viewerHasStarred: !viewerHasStarred
          }
        }
      },
      update: (
        proxy,
        {
          data: {
            removeStar: {
              starrable: { id, viewerHasStarred }
            }
          }
        }
      ) => getUpdatedStarData(proxy, id, viewerHasStarred)
    })

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

        {/* put buttons on the bottom of card */}
        <div className="repository_card__buttons">
          <Button
            className="repository_card__button"
            variant="contained"
            color={isWatch(viewerSubscription) ? 'primary' : 'secondary'}
            startIcon={<VisibilityIcon />}
            onClick={() => watchRepositoryWrapper()}
          >
            {isWatch(viewerSubscription) ? 'Unwatch' : 'Watch'} {watchers}
          </Button>

          {!viewerHasStarred ? (
            <Button
              className="repository_card__button"
              variant="contained"
              color="secondary"
              onClick={() => addStarWrapper()}
              startIcon={<StarIcon />}
            >
              Star {stargazers}
            </Button>
          ) : (
            <Button
              className="repository_card__button"
              variant="contained"
              color="primary"
              onClick={() => removeStarWrapper()}
              startIcon={<StarIcon />}
            >
              Unstar {stargazers}
            </Button>
          )}
        </div>

        <Typography variant="body2" component="p">
          {description}
        </Typography>

        <ul className="repository_card__list">
          {primaryLanguage !== '' && <li>Language: {primaryLanguage}</li>}
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

export default RepositoryItem
