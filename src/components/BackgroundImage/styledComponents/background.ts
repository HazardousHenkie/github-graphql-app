import styled from 'styled-components'

import backgroundImage from 'assets/background.jpg'

export const BackgroundStyled = styled.div`
  background-image: url(${backgroundImage});
  // not supported in IE or Edge
  // background: url('./background.jpg') rgba(255, 0, 150, 0.3);
  // background-blend-mode: multiply;
  height: 100vh;
  position: absolute;
  background-size: cover;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;

  &:after {
    content: '';
    background: ${props => props.theme.transparentBlack};
    width: 100%;
    height: 100%;
    position: absolute;
  }
`
