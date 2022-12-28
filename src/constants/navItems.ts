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
  {
    label: 'Manage Bar Shelf',
    statusFilter: ingredientFilterStatus.manageBarShelf,
  },
  { label: 'My Bar Shelf', statusFilter: ingredientFilterStatus.myBarShelf },
  { label: 'Shopping List', statusFilter: ingredientFilterStatus.shoppingList },
];

export const cocktailsNavItems: INavPageLink[] = [
  { label: 'All Cocktails', statusFilter: cocktailFilterStatus.allCocktails },
  { label: 'My Cocktails', statusFilter: cocktailFilterStatus.myCocktails },
  {
    label: 'Favorite Cocktails',
    statusFilter: cocktailFilterStatus.favoriteCocktails,
  },
];

interface IExtraMenuNavLink {
  readonly href: string;
  readonly label: string;
}

export const extraMenuNavLinks: IExtraMenuNavLink[] = [
  { href: 'settings', label: 'Settings' },
  { href: 'ingredients/new', label: 'Create an ingredient' },
  { href: 'cocktails/new', label: 'Create a cocktail' },
];
