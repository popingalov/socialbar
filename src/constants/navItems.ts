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
  { label: 'My Bar Shelf', statusFilter: ingredientFilterStatus.MyBarShelf },
  {
    label: 'Manage Bar Shelf',
    statusFilter: ingredientFilterStatus.ManageBarShelf,
  },
  { label: 'Shopping List', statusFilter: ingredientFilterStatus.ShoppingList },
];

export const cocktailsNavItems: INavPageLink[] = [
  { label: 'My Cocktails', statusFilter: cocktailFilterStatus.myCocktails },
  { label: 'All Cocktails', statusFilter: cocktailFilterStatus.AllCocktails },
  {
    label: 'Favorite Cocktails',
    statusFilter: cocktailFilterStatus.FavoriteCocktails,
  },
];
