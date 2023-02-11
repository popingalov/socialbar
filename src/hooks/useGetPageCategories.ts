import { useGetCategoriesQuery } from 'redux/api/manualApi';
import { useTranslation } from 'react-i18next';

export const useInitialFilterStatusLabel = () => {
  const { t } = useTranslation();
  return t('initialFilter');
};

export const useGetPageCategories = (isIngredientPage: boolean) => {
  const { data } = useGetCategoriesQuery();
  const initialFilterStatusLabel = useInitialFilterStatusLabel();

  const ingredientCategories = data?.ingredients.map(({ title }) => title);
  ingredientCategories?.unshift(initialFilterStatusLabel);
  const cocktailCategories = data?.cocktails.map(({ title }) => title);
  cocktailCategories?.unshift(initialFilterStatusLabel);

  return isIngredientPage ? ingredientCategories : cocktailCategories;
};
