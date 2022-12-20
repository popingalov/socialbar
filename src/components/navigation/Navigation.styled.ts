import styled from 'styled-components';

export const NavigationListStyled = styled.ul`
  background-color: ${p => p.theme.colors.accentBackgroundColor};
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  text-align: center;
`;

export const Wrapper = styled.nav<{ isExtraRoute: boolean }>`
  display: flex;
  justify-content: ${({ isExtraRoute }) =>
    !isExtraRoute ? `space-between` : `none`};
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.accentBackgroundColor};
`;
