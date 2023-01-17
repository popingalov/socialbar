import styled from 'styled-components';

export const Wrapper = styled.nav<{ isExtraRoute: boolean }>`
  display: flex;
  justify-content: ${({ isExtraRoute }) =>
    !isExtraRoute ? `space-between` : `none`};
  padding: ${({ theme }) => theme.space[1]}px;
  background-color: ${({ theme }) => theme.colors.accentBackgroundColor};
`;

export const NavigationListStyled = styled.ul`
  background-color: ${p => p.theme.colors.accentBackgroundColor};
  display: flex;
  scroll-behavior: smooth;
  text-align: center;

  @media only screen and (max-width: 480px) {
    overflow-x: scroll;
  }
`;

export const PageName = styled.p`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.space[3]}px;
  color: ${({ theme }) => theme.colors.lightText};
`;
