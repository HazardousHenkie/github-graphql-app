import React, { useContext } from 'react'
import { compose } from 'recompose'

import Grid from '@material-ui/core/Grid'

import SignOutButton from './signOut'

import {
  PaperStyled,
  TypographyStyled,
  SubTypographyStyled
} from './styledComponents/signOut'

import {
  WithAuthorization,
  AuthUserContext
} from 'components/AuthenticationProvider'

const SignOut: React.FC = () => {
  const { authenticated } = useContext(AuthUserContext)

  return (
    <Grid className="log_out" container justify="center" spacing={2}>
      <Grid item xs={12} sm={6}>
        <header className="log_out__header">
          <TypographyStyled variant="h5">Log out</TypographyStyled>
        </header>
        <PaperStyled>
          <div className="log_out__button">
            <SubTypographyStyled variant="h6">
              Are you sure you want to sign out?
            </SubTypographyStyled>

            {authenticated && <SignOutButton />}
          </div>
        </PaperStyled>
      </Grid>
    </Grid>
  )
}

export default compose(React.memo, WithAuthorization)(SignOut)
