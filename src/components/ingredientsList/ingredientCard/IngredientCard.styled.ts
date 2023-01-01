import styled from 'styled-components';

export const IngredientName = styled.p`
  text-transform: capitalize;
  margin-bottom: 2px;
`;

export const ExtraInfo = styled.p`
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
