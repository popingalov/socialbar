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

  const [addMyBar] = useAddToBarMutation();
  const [deleteMyBar] = useDeleteFromBarMutation();
  const [addShopping] = useAddToShoppingMutation();
  const [deleteShopping] = useDeleteFromShoppingMutation();

  const handleMyBarClick = (id: string, toAdd: boolean) => {
    if (toAdd) {
      console.log('addToMyBar', id);
      addMyBar(id);
      return;
    }
    console.log('deleteFromMyBar', id);
    deleteMyBar(id);
  };

  const handleShoppingClick = (id: string, toAdd: boolean) => {
    if (toAdd) {
      console.log('addToShopping', id);
      addShopping(id);
      return;
    }
    console.log('deleteFromShopping', id);
    deleteShopping(id);
  };

  const handleCompleteDelete = (id: string) => {
    console.log('complete delete from app', id);
  };

  const handleIngredientEdit = (id: string) => {
    console.log('edit ingredient', id);
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
