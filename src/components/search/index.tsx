import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { Formik } from 'formik'
import * as Yup from 'yup'

const SearchScheme = Yup.object().shape({
  searchfield: Yup.string().required('Required')
})

const useStyles = makeStyles(theme => ({
  textField: {
    width: 'calc(100% - 100px)'
  },
  button: {
    height: '55px',
    margin: ' 16px 0 0 7px'
  }
}))

interface SearchProps {
  setSearch: any
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
  const classes = useStyles()

  return (
    <div className="search">
      <Formik
        initialValues={{ searchfield: '' }}
        validationSchema={SearchScheme}
        onSubmit={async (values, { setSubmitting }) => {
          const { searchfield } = values

          setSearch(searchfield)
          setSubmitting(false)
        }}
      >
        {({
          values,
          isSubmitting,
          isValid,
          handleChange,
          handleBlur,
          errors,
          handleSubmit,
          touched
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="searchfield"
              name="searchfield"
              className={classes.textField}
              value={values.searchfield}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.searchfield && touched.searchfield && errors.searchfield
              }
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
              disabled={isSubmitting || !isValid}
            >
              Search
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Search
