import React from 'react'

import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import * as Yup from 'yup'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Email from '@material-ui/icons/Email'
import Typography from '@material-ui/core/Typography'

import * as routes from '../../constants/routes'
import history from '../../helpers/history'
import { withFirebase, FirebaseProviderProps } from '../firebase'

import useSnackbarContext from '../snackbar/context'

const SignupScheme = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email()
})

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 'calc(100% - 90px)'
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

export const ForgotPassword: React.FC<FirebaseProviderProps> = ({
  firebase
}) => {
  const { setSnackbarState } = useSnackbarContext()
  const classes = useStyles()

  return (
    <div className="signup_form">
      <Typography variant="h5" component="h2" className={classes.title}>
        Reset pasword
      </Typography>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={SignupScheme}
        onSubmit={(values, { setSubmitting }): void => {
          const { email } = values

          firebase
            .doPasswordReset(email)
            .then(() => {
              setSubmitting(false)
              setSnackbarState({
                message: 'Password reset e-mail has been send',
                variant: 'success'
              })

              history.push(routes.home)
            })
            .catch(error => {
              setSubmitting(false)
              setSnackbarState({ message: error.message, variant: 'error' })
            })
        }}
      >
        {({ isSubmitting, isValid }): React.ReactNode => (
          <Form>
            <Field
              type="text"
              name="email"
              component={TextField}
              className={classes.textField}
              id="email"
              variant="outlined"
              margin="normal"
              label="E-mail"
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={isSubmitting || !isValid}
            >
              <Email className={classes.leftIcon} />
              Reset Password
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default withFirebase(ForgotPassword)
