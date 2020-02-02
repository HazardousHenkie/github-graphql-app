import React from 'react'

import {
  ScrollToStyled,
  ScrollToMouseStyled,
  ScrollToTextStyled
} from './styledComponents/scrollTo'

import { scroll } from 'utils/strings'

type ScrollToProps = {
  scrollTo: string
}

const ScrollTo: React.FC<ScrollToProps> = ({ scrollTo }) => {
  return (
    <ScrollToStyled activeClass="active" smooth={true} to={scrollTo}>
      <ScrollToMouseStyled />
      <ScrollToTextStyled>{scroll}</ScrollToTextStyled>
    </ScrollToStyled>
  )
}

export default ScrollTo
