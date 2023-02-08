import {
  cocktailFilterStatus,
  ingredientFilterStatus,
} from 'redux/filter/filterConstants';
import { INavPageLink } from 'types/navPageLink';
import { useTranslation } from 'react-i18next';

export const useGetNavItems = (isIngredients: boolean) => {
  const { t } = useTranslation();

  const ingredientsNavItems: INavPageLink[] = [
    {
      label: t('ingredientsNav.manageBarShelf'),
      statusFilter: ingredientFilterStatus.manageBarShelf,
    },
    {
      label: t('ingredientsNav.myBarShelf'),
      statusFilter: ingredientFilterStatus.myBarShelf,
    },
    {
      label: t('ingredientsNav.shoppingList'),
      statusFilter: ingredientFilterStatus.shoppingList,
    },
  ];

  const cocktailsNavItems: INavPageLink[] = [
    {
      label: t('cocktailsNav.allCocktails'),
      statusFilter: cocktailFilterStatus.allCocktails,
    },
    {
      label: t('cocktailsNav.myCocktails'),
      statusFilter: cocktailFilterStatus.myCocktails,
    },
    {
      label: t('cocktailsNav.favoriteCocktails'),
      statusFilter: cocktailFilterStatus.favoriteCocktails,
    },
  ];

  return isIngredients ? ingredientsNavItems : cocktailsNavItems;
};
