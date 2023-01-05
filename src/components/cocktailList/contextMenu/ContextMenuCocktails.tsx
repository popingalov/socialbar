import React from 'react';
import { Option, Title } from './ContextMenuCocktails.styled';

interface IProps {
  name: string;
  id: string;

  isFavoritePage: boolean;
  isFavorite: boolean;
}
const ContextMenuCocktails: React.FC<IProps> = ({
  name,
  id,
  isFavoritePage,
  isFavorite,
}) => {
  return (
    <>
      <Title>{name}</Title>
      {(isFavoritePage || (!isFavoritePage && isFavorite)) && (
        <Option>Remove to favorites</Option>
      )}
      {!isFavoritePage && !isFavorite && <Option>Add to favorites</Option>}

      <Option>Delete from application</Option>
      <Option>Change the recipe</Option>
    </>
  );
};

export default ContextMenuCocktails;
