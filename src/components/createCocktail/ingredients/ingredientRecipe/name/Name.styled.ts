import { Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const MainInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.mainText};
  padding-top: ${({ theme }) => theme.space[1]}px;
  padding-bottom: ${({ theme }) => theme.space[1]}px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  width: 100%;
  outline: none;

  ::placeholder {
    ${({ theme }) => theme.colors.secondaryText};
  }
`;
