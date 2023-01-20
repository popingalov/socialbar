import styled from 'styled-components';

export const CocktailsName = styled.p`
  text-transform: capitalize;
  margin-bottom: 2px;
`;

export const Ingredients = styled.p`
  max-height: 15px;
  overflow-y: hidden;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${p => p.theme.colors.accent};
  stroke-width: 2px;
`;
