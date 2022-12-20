import styled from 'styled-components';

export const Wrapper = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 18px;

  :hover,
  :focus {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;
