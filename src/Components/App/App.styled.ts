import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${p => p.theme.fontFamily};
    color: ${p => p.theme.colors.mainText}; 
    background-color: ${p => p.theme.colors.mainBackgroundColor};
  }

  * {
    box-sizing:border-box;
  }
`;
