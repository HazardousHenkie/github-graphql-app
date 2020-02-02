import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'

import {
  FormStyled,
  TextFieldStyled,
  ButtonStyled
} from './styledComponents/search'

import { search, searchfieldLabel } from 'utils/strings'

const SearchScheme = Yup.object().shape({
  searchfield: Yup.string().required('Required')
})

interface SearchProps {
  setSearch: any
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
  return (
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
        <FormStyled onSubmit={handleSubmit}>
          <TextFieldStyled
            error={errors.searchfield ? true : false}
            label={searchfieldLabel}
            name="searchfield"
            value={values.searchfield}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={
              errors.searchfield && touched.searchfield && errors.searchfield
            }
            variant="filled"
            fullWidth
            margin="normal"
          />

          <ButtonStyled
            type="submit"
            variant="contained"
            color="secondary"
            disabled={isSubmitting || !isValid}
          >
            {search}
          </ButtonStyled>
        </FormStyled>
      )}
    </Formik>
  )
}

export default React.memo(Search)
