import {
  cocktailFilterStatus,
  ingredientFilterStatus,
} from 'redux/filter/filterConstants';

interface INavLink {
  readonly href: string;
  readonly label: string;
}

export const mainNavItems: INavLink[] = [
  { href: 'ingredients', label: 'Ingredients' },
  { href: 'cocktails', label: 'Cocktails' },
  { href: 'settings', label: 'Settings' },
];

interface INavPageLink {
  readonly label: string;
  readonly statusFilter: string;
}

export const ingredientsNavItems: INavPageLink[] = [
  { label: 'My Bar Shelf', statusFilter: ingredientFilterStatus.myBarShelf },
  {
    label: 'Manage Bar Shelf',
    statusFilter: ingredientFilterStatus.manageBarShelf,
  },
  { label: 'Shopping List', statusFilter: ingredientFilterStatus.shoppingList },
];

export const cocktailsNavItems: INavPageLink[] = [
  { label: 'My Cocktails', statusFilter: cocktailFilterStatus.myCocktails },
  { label: 'All Cocktails', statusFilter: cocktailFilterStatus.allCocktails },
  {
    label: 'Favorite Cocktails',
    statusFilter: cocktailFilterStatus.favoriteCocktails,
  },
];
