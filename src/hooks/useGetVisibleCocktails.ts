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
            ...cocktails.needMore,
            ...cocktails.mine.haveAll,
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
        return {
          visibleCocktails: [...cocktails.all],
          isFetching: cocktailsFetching,
        };
      }
      return {
        visibleCocktails: [],
        isFetching: cocktailsFetching,
      };
  }
};
