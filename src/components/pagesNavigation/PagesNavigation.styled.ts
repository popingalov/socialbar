import styled from 'styled-components';

export const NavigationListStyled = styled.ul`
  background-color: ${({ theme }) => theme.colors.accentBackgroundColor};
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  text-align: center;
`;
