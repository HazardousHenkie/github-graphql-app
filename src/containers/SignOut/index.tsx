import React from 'react'
import { compose } from 'recompose'

import Grid from '@material-ui/core/Grid'

import SignOutButton from './signOut'

import Background from 'components/BackgroundImage'

import {
  LogoutStyled,
  PaperStyled,
  LogoutFormStyled,
  TypographyStyled,
  SubTypographyStyled
} from './styledComponents/signOut'

import { WithAuthorization } from 'components/AuthenticationProvider'

const SignOut: React.FC = () => {
  return (
    <LogoutStyled container justify="center" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Background />

        <LogoutFormStyled>
          <PaperStyled>
            <TypographyStyled variant="h2">Log out</TypographyStyled>

            <SubTypographyStyled variant="h3">
              Are you sure you want to sign out?
            </SubTypographyStyled>

            <SignOutButton />
          </PaperStyled>
        </LogoutFormStyled>
      </Grid>
    </LogoutStyled>
  )
}

export default compose(React.memo, WithAuthorization)(SignOut)
