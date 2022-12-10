interface INavLink {
  readonly href: string;
  readonly label: string;
}

export const mainNavItems: INavLink[] = [
  { href: 'ingredients', label: 'Ingredients' },
  { href: 'cocktails', label: 'Cocktails' },
  { href: 'settings', label: 'Settings' },
];

export const ingredientsNavItems: INavLink[] = [
  { href: 'myBarShelf', label: 'My Bar Shelf' },
  { href: 'manageBarShelf', label: 'Manage Bar Shelf' },
  { href: 'shoppingList', label: 'Shopping List' },
];

export const cocktailsNavItems: INavLink[] = [
  { href: 'myCocktails', label: 'My Cocktails' },
  { href: 'allCocktails', label: 'All Cocktails' },
  { href: 'favoriteCocktails', label: 'Favorite Cocktails' },
];
