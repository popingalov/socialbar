import styled from 'styled-components';

export const NavigationListStyled = styled.ul`
  background-color: ${p => p.theme.colors.accentBackgroundColor};
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  text-align: center;
`;
