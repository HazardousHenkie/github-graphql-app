import React from 'react'

import Grid from '@material-ui/core/Grid'

import { StyledFooter } from './styledComponents/footer'

import moment from 'moment'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Grid container justify="center" spacing={0}>
        <Grid item>
          {`Kyle @ ${moment().format('YYYY')} - Github GraphQL project`}
        </Grid>
      </Grid>
    </StyledFooter>
  )
}

export default React.memo(Footer)
