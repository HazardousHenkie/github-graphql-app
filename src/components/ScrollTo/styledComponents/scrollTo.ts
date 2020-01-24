import styled, { keyframes } from 'styled-components'

import { Link } from 'react-scroll'

const mouseAnimation = keyframes`
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

export const ScrollToStyled = styled(Link)`
  z-index: 3;
  position: absolute;
  width: 60px;
  height: 80px;
  top: calc(100% - 100px);
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const ScrollToMouseStyled = styled.span`
  position: absolute;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid ${props => props.theme.white};
  border-radius: 50px;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: ${props => props.theme.white};
    border-radius: 100%;
    animation: ${mouseAnimation} 2s infinite;
    box-sizing: border-box;
  }
`

export const ScrollToTextStyled = styled.span`
  color: ${props => props.theme.white};
  font: normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: 0.1em;
  transition: opacity 0.3s;
  position: absolute;
  top: 60px;
`
