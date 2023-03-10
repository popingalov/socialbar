import { Field } from 'formik';
import styled from 'styled-components';

export const LabelAddPhoto = styled.label`
  cursor: pointer;
  padding: ${({ theme }) => theme.space[2]}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputAddPhoto = styled(Field)<{
  border: string;
  backgroundColor: string;
}>`
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  /* position: absolute; */
  /* z-index: -1; */
`;

export const ErrorText = styled.p`
  color: red;
  font-size: ${p => p.theme.fontSizes.xs};
`;
