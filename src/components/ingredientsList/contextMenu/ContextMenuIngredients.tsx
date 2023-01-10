import React from 'react';
import { Title } from './ContextMenuIngredients.styled';
import ContextButton from 'components/UI-kit/buttons/contextButton';
import {
  useAddToBarMutation,
  useDeleteFromBarMutation,
} from 'redux/api/myBarApi';
import {
  useAddToShoppingMutation,
  useDeleteFromShoppingMutation,
} from 'redux/api/shoppingApi';
import { useDispatch } from 'react-redux';
import { setContextMenuIsOpen } from 'redux/modal/modalSlice';

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
        {!isMyBar && !isAvailable && 'Add to '}
        {(isMyBar || (!isMyBar && isAvailable)) && 'Remove from '}
        my bar
      </ContextButton>

      <ContextButton
        onClick={() => {
          handleShoppingClick(id, !isShoppingList && !isInShoppingList);
        }}
      >
        {!isShoppingList && !isInShoppingList && 'Add to '}
        {(isShoppingList || (!isShoppingList && isInShoppingList)) &&
          'Remove from '}
        shopping list
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
          handleIngredientEdit(id);
        }}
      >
        Edit
      </ContextButton>
    </>
  );
};

export default ContextMenuIngredients;
