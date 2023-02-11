import { useSelector } from 'react-redux';
import { selectCocktailCategory } from 'redux/categoriesFilter/categoriesSelectors';
import { ICocktail } from 'types/cocktail';

export const useGetFilteredCocktails = (cocktails: ICocktail[]) => {
  const cocktailFilterStatus = useSelector(selectCocktailCategory);

  if (!cocktailFilterStatus) {
    return { filteredCocktails: cocktails, filteredItems: 0 };
  }

  const filteredCocktails = cocktails.filter(({ category }) =>
    category.includes(cocktailFilterStatus),
  );

  const filteredItems = cocktails.length - filteredCocktails.length;

  return { filteredCocktails, filteredItems };
};
