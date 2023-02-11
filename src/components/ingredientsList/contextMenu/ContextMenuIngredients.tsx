import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ContextButton from 'components/UI-kit/buttons/contextButton';
import { setContextMenuIsOpen } from 'redux/modal/modalSlice';
import { Title } from './ContextMenuIngredients.styled';
import {
  useAddToBarMutation,
  useDeleteFromBarMutation,
} from 'redux/api/myBarApi';
import {
  useAddToShoppingMutation,
  useDeleteFromShoppingMutation,
} from 'redux/api/shoppingApi';

interface IProps {
  name: string;
  id: string;
  isMyBar: boolean;
  isShoppingList: boolean;
  isAvailable: boolean;
  isInShoppingList: boolean;
}
const ContextMenuIngredients: React.FC<IProps> = ({
  name,
  id,
  isMyBar,
  isShoppingList,
  isAvailable,
  isInShoppingList,
}) => {
  // console.log('first', name, id, isAvailable, isInShoppingList);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [addMyBar] = useAddToBarMutation();
  const [deleteMyBar] = useDeleteFromBarMutation();
  const [addShopping] = useAddToShoppingMutation();
  const [deleteShopping] = useDeleteFromShoppingMutation();

  const handleMyBarClick = (id: string, toAdd: boolean) => {
    if (toAdd) {
      console.log('addToMyBar', id);
      addMyBar(id);
      dispatch(setContextMenuIsOpen(false));
      return;
    }
    console.log('deleteFromMyBar', id);
    deleteMyBar(id);
    dispatch(setContextMenuIsOpen(false));
  };

  const handleShoppingClick = (id: string, toAdd: boolean) => {
    if (toAdd) {
      console.log('addToShopping', id);
      addShopping(id);
      dispatch(setContextMenuIsOpen(false));
      return;
    }
    console.log('deleteFromShopping', id);
    deleteShopping(id);
    dispatch(setContextMenuIsOpen(false));
  };

  const handleCompleteDelete = (id: string) => {
    console.log('complete delete from app', id);
    dispatch(setContextMenuIsOpen(false));
  };

  const handleIngredientEdit = (id: string) => {
    console.log('edit ingredient', id);
    dispatch(setContextMenuIsOpen(false));
  };

  return (
    <>
      <Title>{name}</Title>

      <ContextButton
        onClick={() => {
          handleMyBarClick(id, !isMyBar && !isAvailable);
        }}
      >
        {!isMyBar && !isAvailable && t('contextMenu.addTo')}
        {(isMyBar || (!isMyBar && isAvailable)) && t('contextMenu.removeFrom')}
        {t('contextMenu.myBar')}
      </ContextButton>

      <ContextButton
        onClick={() => {
          handleShoppingClick(id, !isShoppingList && !isInShoppingList);
        }}
      >
        {!isShoppingList && !isInShoppingList && t('contextMenu.addTo')}
        {(isShoppingList || (!isShoppingList && isInShoppingList)) &&
          t('contextMenu.removeFrom')}
        {t('contextMenu.shoppingList')}
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
          handleIngredientEdit(id);
        }}
      >
        {t('contextMenu.edit')}
      </ContextButton>
    </>
  );
};

export default ContextMenuIngredients;
