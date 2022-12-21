import styled from 'styled-components';

export const FilterStyled = styled.label`
  display: flex;
  align-items: center;
  max-width: 220px;
  width: 100%;
  margin: 0;
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  background-color: transparent;

  select {
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.lightText};
    letter-spacing: 0.03em;
  }
  option {
    color: ${({ theme }) => theme.colors.mainText};
  }
`;
