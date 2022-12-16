import styled from 'styled-components';

export const BarListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  a {
    display: block;
    padding-top: ${({ theme }) => theme.space[2]}px;
    padding-bottom: ${({ theme }) => theme.space[2]}px;
    padding-left: ${({ theme }) => theme.space[3]}px;
    padding-right: calc(${({ theme }) => theme.space[4]}px - 8px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: ${({ theme }) => theme.space[3]}px;
  }
`;
