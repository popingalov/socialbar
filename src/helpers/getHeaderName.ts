import { paths } from 'constants/paths';

export const getHeaderName = (path: string) => {
  switch (path) {
    case paths.settings:
      return `Settings`;
    case paths.newCocktail:
      return `Create cocktail`;
    case paths.newIngredient:
      return `Create ingredient`;
    default:
      return ``;
  }
};
