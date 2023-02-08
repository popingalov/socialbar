import {
  cocktailFilterStatus,
  ingredientFilterStatus,
} from 'redux/filter/filterConstants';
import { INavPageLink } from 'types/navPageLink';
import { useTranslation } from 'react-i18next';

export const useGetNavItems = (isIngredients: boolean) => {
  const { t, i18n } = useTranslation();

  const ingredientsNavItems: INavPageLink[] = [
    {
      label: t('ingredients.manageBarShelf'),
      statusFilter: ingredientFilterStatus.manageBarShelf,
    },
    {
      label: t('ingredients.myBarShelf'),
      statusFilter: ingredientFilterStatus.myBarShelf,
    },
    {
      label: t('ingredients.shoppingList'),
      statusFilter: ingredientFilterStatus.shoppingList,
    },
  ];

  const cocktailsNavItems: INavPageLink[] = [
    {
      label: t('cocktails.allCocktails'),
      statusFilter: cocktailFilterStatus.allCocktails,
    },
    {
      label: t('cocktails.myCocktails'),
      statusFilter: cocktailFilterStatus.myCocktails,
    },
    {
      label: t('cocktails.favoriteCocktails'),
      statusFilter: cocktailFilterStatus.favoriteCocktails,
    },
  ];

  return isIngredients ? ingredientsNavItems : cocktailsNavItems;
};
