import { useSelector } from 'react-redux';
import {
  selectCocktailCategory,
  selectIngredientCategory,
} from 'redux/categoriesFilter/categoriesSelectors';

export const useGetNavSelectLabel = (isIngredientsPage: boolean) => {
  const currentIngredientCategory = useSelector(selectIngredientCategory);
  const currentCocktailCategory = useSelector(selectCocktailCategory);

  return isIngredientsPage
    ? currentIngredientCategory
    : currentCocktailCategory;
};
