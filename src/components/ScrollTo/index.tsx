import React from 'react'

import {
  ScrollToStyled,
  ScrollToMouseStyled,
  ScrollToTextStyled
} from './styledComponents/scrollTo'

interface ScrollToProps {
  scrollTo: string
}

const ScrollTo: React.FC<ScrollToProps> = ({ scrollTo }) => {
  return (
    <ScrollToStyled activeClass="active" smooth={true} to={scrollTo}>
      <ScrollToMouseStyled />
      <ScrollToTextStyled>Scroll</ScrollToTextStyled>
    </ScrollToStyled>
  )
}

export default React.memo(ScrollTo)
