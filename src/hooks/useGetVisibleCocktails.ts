import { useFetchCocktailsQuery } from 'redux/api/cocktailApi';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { ICocktail } from 'types/cocktail';

export const useGetVisibleCocktails = (filterStatus: string) => {
  const { data: cocktails, isFetching } = useFetchCocktailsQuery();
  // const { data: myCocktails, isFetching: myCocktailsFetching } = useFetchMyCocktails();
  // const { data: favoriteCocktails, isFetching: favoriteCocktailsFetching } = useFetchFavoriteCocktails();

  switch (filterStatus) {
    case cocktailFilterStatus.favoriteCocktails:
      // return cocktails.filter(({ favorite }) => favorite);
      const favoriteCocktails: ICocktail[] = [];
      return {
        visibleCocktails: favoriteCocktails,
        isFetching,
      };
    case cocktailFilterStatus.myCocktails:
      //TODO: add ...cocktails?.mine
      if (!cocktails)
        return {
          visibleCocktails: [],
          isFetching,
        };
      return {
        visibleCocktails: [...cocktails.haveAll, ...cocktails.needMore],
        isFetching,
      };
    default:
      if (!cocktails)
        return {
          visibleCocktails: [],
          isFetching,
        };
      return {
        visibleCocktails: [...cocktails.all],
        isFetching,
      };
  }
};
