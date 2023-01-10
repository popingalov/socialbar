import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from 'redux/api/manualApi';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import { selectIngredientCategory } from 'redux/categoriesFilter/categoriesSelectors';
import { IIngredient } from 'types/ingredient';

export const useGetFilteredIngredients = (ingredients: IIngredient[]) => {
  const ingredientFilterStatus = useSelector(selectIngredientCategory);
  const { data } = useGetCategoriesQuery();
  const categories = data?.ingredients.map(({ title }) => title);
  categories?.unshift(initialFilterStatus);

  if (ingredientFilterStatus === initialFilterStatus) {
    return ingredients;
  }

  const filteredIngredients = ingredients.filter(
    ({ category }) => category === ingredientFilterStatus,
  );
  return filteredIngredients;
};
