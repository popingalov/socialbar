import styled from 'styled-components';

export const NavigationListStyled = styled.ul`
  background-color: ${p => p.theme.colors.accentBackgroundColor};
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  text-align: center;
`;

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.accentBackgroundColor};
`;
