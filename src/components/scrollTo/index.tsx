import React from 'react'

import { Link, animateScroll as scroll } from 'react-scroll'

import './scrollTo.scss'

interface ScrollToProps {
  scrollTo: string
}

const ScrollTo: React.FC<ScrollToProps> = ({ scrollTo }) => {
  return (
    <Link activeClass="active" smooth={true} to={scrollTo}>
      <div className="scroll_to">
        <span className="scroll_to__mouse"></span>
        <span className="scroll_to__text">Scroll</span>
      </div>
    </Link>
  )
}

export default React.memo(ScrollTo)
