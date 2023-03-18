import { Field } from 'formik';
import styled from 'styled-components';

export const LabelStyled = styled.label`
  width: 100%;
`;

export const InputStyled = styled(Field)<{
  isRecipeIngredient: boolean;
  // border: string;
  // backgroundColor: string;
}>`
  cursor: pointer;
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

export const ErrorText = styled.p`
  color: red;
  font-size: ${p => p.theme.fontSizes.xs};
`;
