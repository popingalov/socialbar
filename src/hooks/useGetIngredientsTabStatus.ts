import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';

export const useGetIngredientsTabStatus = () => {
  const ingredientFilter = useSelector(selectIngredientFilter);

  const isManageBarShelf =
    ingredientFilterStatus.manageBarShelf === ingredientFilter;
  const isMyBar = ingredientFilterStatus.myBarShelf === ingredientFilter;
  const isShoppingList =
    ingredientFilterStatus.shoppingList === ingredientFilter;

  return { isMyBar, isShoppingList, isManageBarShelf };
};
