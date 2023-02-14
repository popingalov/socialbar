import styled from 'styled-components';

export const InputStyled = styled.input`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderBottom};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  width: 100%;
  outline: none;

  ::placeholder {
    ${({ theme }) => theme.colors.secondaryText};
  }
`;
