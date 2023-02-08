interface INavLink {
  readonly href: string;
  readonly label: string;
}

export const mainNavItems: INavLink[] = [
  { href: 'ingredients', label: 'Ingredients' },
  { href: 'cocktails', label: 'Cocktails' },
  { href: 'settings', label: 'Settings' },
];

export const extraMenuNavLinks: INavLink[] = [
  { href: 'settings', label: 'Settings' },
  { href: 'ingredients/new', label: 'Create an ingredient' },
  { href: 'cocktails/new', label: 'Create a cocktail' },
];
