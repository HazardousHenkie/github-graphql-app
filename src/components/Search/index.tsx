import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { TextFieldStyled, ButtonStyled } from './styledComponents/search'

const SearchScheme = Yup.object().shape({
  searchfield: Yup.string().required('Required')
})

interface SearchProps {
  setSearch: any
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
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
            <TextFieldStyled
              label="searchfield"
              name="searchfield"
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

            <ButtonStyled
              type="submit"
              variant="contained"
              color="secondary"
              disabled={isSubmitting || !isValid}
            >
              Search
            </ButtonStyled>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Search
