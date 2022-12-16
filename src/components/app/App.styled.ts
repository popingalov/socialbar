import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colors.mainText}; 
    background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  }

  * {
    box-sizing:border-box;
  }
`;
