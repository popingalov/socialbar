import styled from 'styled-components';

export const ListItem = styled.li<{
  name: string;
  isInMyBar: boolean;
}>`
  background-color: ${({ theme, isInMyBar }) =>
    isInMyBar
      ? theme.colors.secondaryBackgroundColor
      : theme.colors.mainBackgroundColor};
`;
