import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const RepositoryCardStyled = styled(Card)`
  height: 100%;
`

export const RepositoriesTitleStyled = styled(Typography)`
  text-align: center;
  padding: 30px 0 15px;
`

export const RepositoriesButtonsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 15px;
`

export const RepositoriesButtonStyled = styled(Button)`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`

export const RepositoriesListStyled = styled.ul`
  padding: 0;
  padding: 0;
  margin: 15px 0 0;
  list-style: none;
  text-align: center;
`

export const RepositoriesLinkStyled = styled.a`
  color: ${props => props.theme.red};
  text-decoration: none;
`
