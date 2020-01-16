import React from 'react'

import { Link } from 'react-scroll'

import './scrollTo.scss'

interface ScrollToProps {
  scrollTo: string
}

const ScrollTo: React.FC<ScrollToProps> = ({ scrollTo }) => {
  return (
    <Link
      className="scroll_to"
      activeClass="active"
      smooth={true}
      to={scrollTo}
    >
      <span className="scroll_to__mouse"></span>
      <span className="scroll_to__text">Scroll</span>
    </Link>
  )
}

export default React.memo(ScrollTo)
