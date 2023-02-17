import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.space[4]}px;

  span {
    display: block;
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }
`;

export const TextareaStyled = styled.textarea`
  padding-top: ${({ theme }) => theme.space[1]}px;
  padding-bottom: ${({ theme }) => theme.space[1]}px;
  display: flex;
  border: none;
  width: 100%;
  height: 120px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.modal};
  overflow: hidden;
  outline: none;
  border-radius: 4px;

  ::placeholder {
    ${({ theme }) => theme.colors.secondaryText};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: ${p => p.theme.fontSizes.xs};
`;
