import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RecipeListStyled = styled.ol`
  list-style: decimal;
  list-style-position: inside;
`;

export const Recipe = styled.li`
  margin-left: ${({ theme }) => theme.space[1]}px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const RecipePart = styled.span`
  color: ${({ theme }) => theme.colors.mainText};
`;

export const IngredientPart = styled(NavLink)`
  color: ${({ theme }) => theme.colors.link};
`;
