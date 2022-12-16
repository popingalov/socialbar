import styled from 'styled-components';

export const ListItem = styled.li<{ allIngredientsAreAvailable: boolean }>`
  background-color: ${({ theme, allIngredientsAreAvailable }) =>
    allIngredientsAreAvailable
      ? theme.colors.activeLinkBackgroundColor
      : theme.colors.mainBackgroundColor};
`;
