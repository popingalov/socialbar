import { useFetchCocktailsQuery } from 'redux/api/cocktailApi';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { ICocktail } from 'types/cocktail';

export const useGetVisibleCocktails = (filterStatus: string) => {
  const { data: allCocktails, isFetching } = useFetchCocktailsQuery();
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
      const myCocktails: ICocktail[] = [];
      return {
        visibleCocktails: myCocktails,
        isFetching,
      };
    default:
      return { visibleCocktails: allCocktails, isFetching };
  }
};
