import styled from 'styled-components';

export const InputStyled = styled.input<{ isRecipeIngredient: boolean }>`
  padding-top: ${({ theme, isRecipeIngredient }) =>
    isRecipeIngredient ? theme.space[1] : theme.space[2]}px;
  padding-bottom: ${({ theme, isRecipeIngredient }) =>
    isRecipeIngredient ? theme.space[1] : theme.space[2]}px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme, isRecipeIngredient }) => theme.fontSizes.s};
  font-family: inherit;
  width: 100%;
  outline: none;

  ::placeholder {
    ${({ theme }) => theme.colors.secondaryText};
  }
`;
