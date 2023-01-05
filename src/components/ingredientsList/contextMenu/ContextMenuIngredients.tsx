import React from 'react';
import { Option, Title } from './ContextMenuIngredients.styled';

interface IProps {
  name: string | null;
  id: string | null;
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
  console.log('first', name, id, isAvailable, isInShoppingList);
  return (
    <>
      <Title>{name}</Title>

      {!isMyBar && !isAvailable && <Option>Add to my bar</Option>}
      {(isMyBar || (!isMyBar && isAvailable)) && (
        <Option>Remove from my bar</Option>
      )}

      {!isShoppingList && !isInShoppingList && (
        <Option> Add to shopping list</Option>
      )}
      {(isShoppingList || (!isShoppingList && isInShoppingList)) && (
        <Option> Remove from shopping list</Option>
      )}

      <Option>Delete from application</Option>
      <Option>Edit</Option>
    </>
  );
};

export default ContextMenuIngredients;
