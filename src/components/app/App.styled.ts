import { createGlobalStyle } from 'styled-components';
import background from '../../assets/images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    font-family: ${p => p.theme.fontFamily};
    color: ${p => p.theme.colors.mainText}; 
    background-image: ${() => `url(${background})`};
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #root {
    height:100%;
    display:flex;
    flex-direction:column;
  }

  main {
    flex-grow:1;
  }

  * {
    box-sizing:border-box;
  }
`;
