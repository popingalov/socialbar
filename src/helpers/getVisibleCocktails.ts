import { cocktailFilterStatus } from 'redux/filter/filterConstants';

export function getVisibleCocktails(
  cocktails: ICocktail[],
  filterStatus: string,
) {
  switch (filterStatus) {
    case cocktailFilterStatus.favoriteCocktails:
      return cocktails.filter(({ favorite }) => favorite);
    case cocktailFilterStatus.myCocktails:
      const isAvailable = cocktails.filter(({ ingredients }) =>
        ingredients.every(({ available }) => available),
      );
      const isMine = cocktails.filter(({ isMine }) => isMine);
      return Array.from(new Set([...isAvailable, ...isMine]));
    default:
      return cocktails;
  }
}
