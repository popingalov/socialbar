import { useFetchCocktailsQuery } from 'redux/api/cocktailApi';
import { useGetFavoritesQuery } from 'redux/api/favoriteApi';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';

export const useGetVisibleCocktails = (filterStatus: string) => {
  const { data: cocktails, isFetching: cocktailsFetching } =
    useFetchCocktailsQuery();
  const { data: favoriteCocktails, isFetching: favoriteCocktailsFetching } =
    useGetFavoritesQuery();

  // console.log('cocktails', cocktails);
  // console.log('favoriteCocktails', favoriteCocktails);

  switch (filterStatus) {
    case cocktailFilterStatus.favoriteCocktails:
      if (favoriteCocktails) {
        return {
          visibleCocktails: favoriteCocktails,
          isFetching: favoriteCocktailsFetching,
        };
      }
      return {
        visibleCocktails: [],
        isFetching: favoriteCocktailsFetching,
      };

    case cocktailFilterStatus.myCocktails:
      if (cocktails && cocktails.mine?.haveAll.length) {
        return {
          visibleCocktails: [
            ...cocktails.haveAll,
            ...cocktails.mine.haveAll,
            ...cocktails.needMore,
          ],
          isFetching: cocktailsFetching,
        };
      }
      if (cocktails) {
        return {
          visibleCocktails: [...cocktails.haveAll, ...cocktails.needMore],
          isFetching: cocktailsFetching,
        };
      }
      return {
        visibleCocktails: [],
        isFetching: cocktailsFetching,
      };

    default:
      if (cocktails) {
        const haveAll = cocktails.all.filter(({ lacks }) => lacks.length === 0);
        const other = cocktails.all.filter(({ lacks }) => lacks.length !== 0);
        return {
          visibleCocktails: [...haveAll, ...other],
          isFetching: cocktailsFetching,
        };
      }
      return {
        visibleCocktails: [],
        isFetching: cocktailsFetching,
      };
  }
};
