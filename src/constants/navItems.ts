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
  { href: 'my', label: 'My Bar Shelf' },
  { href: 'shelf', label: 'Manage Bar Shelf' },
  { href: 'shopping', label: 'Shopping List' },
];

export const cocktailsNavItems: INavLink[] = [
  { href: 'my', label: 'My Cocktails' },
  { href: 'all', label: 'All Cocktails' },
  { href: 'favorite', label: 'Favorite Cocktails' },
];
