import { useGetCategoriesQuery } from 'redux/api/manualApi';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';

export const useInitialFilterStatus = () => {};

export const useGetPageCategories = (isIngredientPage: boolean) => {
  const { data } = useGetCategoriesQuery();

  const ingredientCategories = data?.ingredients.map(({ title }) => title);
  ingredientCategories?.unshift(initialFilterStatus);
  const cocktailCategories = data?.cocktails.map(({ title }) => title);
  cocktailCategories?.unshift(initialFilterStatus);

  return isIngredientPage ? ingredientCategories : cocktailCategories;
};
