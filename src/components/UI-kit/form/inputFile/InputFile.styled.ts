import styled from 'styled-components';

export const LabelAddPhoto = styled.label`
  cursor: pointer;
  padding: ${({ theme }) => theme.space[2]}px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const InputAddPhoto = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
