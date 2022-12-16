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
    margin-right: ${p => p.theme.space[3]}px;
    display: block;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.13);
    object-fit: contain;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
