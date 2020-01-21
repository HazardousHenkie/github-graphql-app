import React from 'react'

import Grid from '@material-ui/core/Grid'

import Background from 'components/BackgroundImage'

import SignInGithub from './signInGithub'

import {
  LoginStyled,
  LoginTitleStyled,
  LoginFormStyled,
  PaperStyled
} from './styledComponents/login'

const Login: React.FC = () => {
  return (
    <LoginStyled container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} sm={7} md={5}>
        <div>
          <Background />

          <LoginFormStyled>
            <PaperStyled>
              <LoginTitleStyled variant="h2">Login</LoginTitleStyled>

              <SignInGithub />
            </PaperStyled>
          </LoginFormStyled>
        </div>
      </Grid>
    </LoginStyled>
  )
}

export default React.memo(Login)
