import React from 'react'

import Grid from '@material-ui/core/Grid'

import { StyledFooter } from './styledComponents/footer'

import { footerMessageFirst, footerMessageSecond } from 'utils/strings'

import moment from 'moment'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Grid container justify="center" spacing={0}>
        <Grid item>
          {`${footerMessageFirst} ${moment().format(
            'YYYY'
          )} ${footerMessageSecond}`}
        </Grid>
      </Grid>
    </StyledFooter>
  )
}

export default Footer
