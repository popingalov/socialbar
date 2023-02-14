import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: ${({ theme }) => theme.space[1]}px;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: inherit;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  :hover,
  :focus,
  :focus:hover {
    background-color: ${({ theme }) => theme.colors.activeLinkBackgroundColor};
    /* color: ${({ theme }) => theme.colors.lightText}; */
    outline: none;
  }
`;
