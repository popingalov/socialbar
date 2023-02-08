import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ContextButton from 'components/UI-kit/buttons/contextButton';
import { setContextMenuIsOpen } from 'redux/modal/modalSlice';
import { Title } from './ContextMenuCocktails.styled';
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
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleFavoriteClick = (id: string, toAdd: boolean) => {
    if (toAdd) {
      console.log('addFavorite', id);
      addFavorite(id);
      dispatch(setContextMenuIsOpen(false));
      return;
    }
    console.log('deleteFavorite', id);
    deleteFavorite(id);
    dispatch(setContextMenuIsOpen(false));
  };

  const handleCompleteDelete = (id: string) => {
    console.log('complete delete from app', id);
    dispatch(setContextMenuIsOpen(false));
  };

  const handleCocktailEdit = (id: string) => {
    console.log('edit ingredient', id);
    dispatch(setContextMenuIsOpen(false));
  };

  return (
    <>
      <Title>{name}</Title>

      <ContextButton
        onClick={() => {
          handleFavoriteClick(id, !isFavoritePage && !isFavorite);
        }}
      >
        {!isFavoritePage && !isFavorite && t('contextMenu.addTo')}
        {(isFavoritePage || (!isFavoritePage && isFavorite)) &&
          t('contextMenu.removeFrom')}
        {t('contextMenu.favorites')}
      </ContextButton>

      <ContextButton
        onClick={() => {
          handleCompleteDelete(id);
        }}
      >
        {t('contextMenu.completelyDelete')}
      </ContextButton>
      <ContextButton
        onClick={() => {
          handleCocktailEdit(id);
        }}
      >
        {t('contextMenu.changeRecipe')}
      </ContextButton>
    </>
  );
};

export default ContextMenuCocktails;
