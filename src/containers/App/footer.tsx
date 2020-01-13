import React from 'react'

import Grid from '@material-ui/core/Grid'

import moment from 'moment'

import './scss/footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Grid container justify="center" spacing={0}>
        <Grid item>
          <div className="footer__copyright">
            {`Kyle @ ${moment().format('YYYY')} - Github GraphQL project`}
          </div>
        </Grid>
      </Grid>
    </footer>
  )
}

export default React.memo(Footer)
