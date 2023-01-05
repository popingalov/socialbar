import styled from 'styled-components';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: none;
  text-transform: capitalize;
`;

export const Option = styled.button`
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
    background-color: ${({ theme }) => theme.colors.hoverLinkBackgroundColor};
    color: ${({ theme }) => theme.colors.lightText};
    outline: none;
  }
`;
