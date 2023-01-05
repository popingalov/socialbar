import React from 'react';
import { Title } from './ContextMenuCocktails.styled';
import ContextButton from 'components/UI-kit/buttons/contextButton';
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from 'redux/api/favoriteApi';

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
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const handleFavoriteClick = (id: string, toAdd: boolean) => {
    if (toAdd) {
      console.log('addFavorite', id);
      addFavorite(id);
      return;
    }
    console.log('deleteFavorite', id);
    deleteFavorite(id);
  };

  const handleCompleteDelete = (id: string) => {
    console.log('complete delete from app', id);
  };

  const handleCocktailEdit = (id: string) => {
    console.log('edit ingredient', id);
  };

  return (
    <>
      <Title>{name}</Title>

      <ContextButton
        onClick={() => {
          handleFavoriteClick(id, !isFavoritePage && !isFavorite);
        }}
      >
        {!isFavoritePage && !isFavorite && 'Add to '}
        {(isFavoritePage || (!isFavoritePage && isFavorite)) && 'Remove from '}
        favorites
      </ContextButton>

      <ContextButton
        onClick={() => {
          handleCompleteDelete(id);
        }}
      >
        Delete from application
      </ContextButton>
      <ContextButton
        onClick={() => {
          handleCocktailEdit(id);
        }}
      >
        Change the recipe
      </ContextButton>
    </>
  );
};

export default ContextMenuCocktails;
