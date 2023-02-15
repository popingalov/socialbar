import styled from 'styled-components';

export const MeasureBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]}px;
  width: 200px;
`;

export const MeasureType = styled.input`
  background: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  width: 60px;
  outline: none;

  ::placeholder {
    ${({ theme }) => theme.colors.secondaryText};
  }
`;
