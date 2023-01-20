import styled from 'styled-components';

export const ListItem = styled.li<{
  allIngredientsAreAvailable: boolean;
  name: string;
}>`
  background-color: ${({ theme, allIngredientsAreAvailable }) =>
    allIngredientsAreAvailable
      ? theme.colors.secondaryBackgroundColor
      : theme.colors.mainBackgroundColor};
`;

export const FilteredMessage = styled.p`
  text-align: center;
`;
