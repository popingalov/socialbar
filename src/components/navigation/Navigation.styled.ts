import styled from 'styled-components';

export const Wrapper = styled.nav<{ isExtraRoute: boolean }>`
  display: flex;
  justify-content: ${({ isExtraRoute }) =>
    !isExtraRoute ? `space-between` : `none`};
  padding: ${({ theme }) => theme.space[1]}px;
  backdrop-filter: blur(15px);
`;

export const NavigationListStyled = styled.ul`
  backdrop-filter: blur(15px);
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
