import { useSelector } from 'react-redux';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';

export const useGetCocktailTabStatus = () => {
  const cocktailFilter = useSelector(selectCocktailFilter);
  const isMyCocktails = cocktailFilterStatus.myCocktails === cocktailFilter;
  const isAllCocktails = cocktailFilterStatus.allCocktails === cocktailFilter;
  const isFavoriteCocktails =
    cocktailFilterStatus.favoriteCocktails === cocktailFilter;

  return { isMyCocktails, isAllCocktails, isFavoriteCocktails };
};
