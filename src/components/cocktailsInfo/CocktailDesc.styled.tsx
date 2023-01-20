import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

interface BtnProps {
  favorite: boolean;
}

export const ButtonBase = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditBtn = styled(ButtonBase)`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const FavoriteBtn = styled(ButtonBase)<BtnProps>`
  color: ${({ theme, favorite }) =>
    favorite ? theme.colors.accent : theme.colors.secondaryText};
`;

export const Image = styled.img`
  display: block;
  max-width: 150px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const Decs = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const RecipeList = styled.ol`
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

interface IngredientItemProps {
  isInMyBar: boolean;
}

export const IngredientItem = styled.li<IngredientItemProps>`
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
  background-color: ${({ isInMyBar, theme }) =>
    isInMyBar ? theme.colors.secondaryBackgroundColor : 'transparent'};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.borderBottom}`};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const IngredientImage = styled.img`
  display: block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: ${({ theme }) => `1px solid ${theme.colors.borderBottom}`};
  object-fit: contain;
  background-color: #fff;
`;

export const IngredientName = styled.p`
  text-transform: capitalize;
  margin-bottom: 2px;
`;

export const ExtraInfo = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const IngredientQuantity = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
`;
