import styled from 'styled-components';

export const Wrapper = styled.div``;

export const MainInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.lightText};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
