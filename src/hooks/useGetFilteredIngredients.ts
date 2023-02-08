import { useSelector } from 'react-redux';
import { selectIngredientCategory } from 'redux/categoriesFilter/categoriesSelectors';
import { IIngredient } from 'types/ingredient';

export const useGetFilteredIngredients = (ingredients: IIngredient[]) => {
  const ingredientFilterStatus = useSelector(selectIngredientCategory);

  if (!ingredientFilterStatus) {
    return { filteredIngredients: ingredients, filteredItems: 0 };
  }

  const filteredIngredients = ingredients.filter(
    ({ category }) => category === ingredientFilterStatus,
  );

  const filteredItems = ingredients.length - filteredIngredients.length;

  return { filteredIngredients, filteredItems };
};
