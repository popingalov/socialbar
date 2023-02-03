import { useSelector } from 'react-redux';
import { useFetchCocktailsQuery } from 'redux/api/cocktailApi';
import { useGetFavoritesQuery } from 'redux/api/favoriteApi';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';

export const useGetVisibleCocktails = () => {
  const filterStatus = useSelector(selectCocktailFilter);
  const { data: cocktails, isFetching: cocktailsFetching } =
    useFetchCocktailsQuery();
  const { data: favoriteCocktails, isFetching: favoriteCocktailsFetching } =
    useGetFavoritesQuery();

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
        const sorted = [...cocktails.all].sort(
          (a, b) => a.lacks.length - b.lacks.length,
        );
        return {
          visibleCocktails: [...sorted],
          isFetching: cocktailsFetching,
        };
      }
      return {
        visibleCocktails: [],
        isFetching: cocktailsFetching,
      };
  }
};
