import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from 'redux/api/manualApi';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import { selectCocktailCategory } from 'redux/categoriesFilter/categoriesSelectors';
import { ICocktail } from 'types/cocktail';

export const useGetFilteredCocktails = (cocktails: ICocktail[]) => {
  const cocktailFilterStatus = useSelector(selectCocktailCategory);
  const { data } = useGetCategoriesQuery();
  const categories = data?.cocktails.map(({ title }) => title);
  categories?.unshift(initialFilterStatus);

  if (cocktailFilterStatus === initialFilterStatus) {
    return { filteredCocktails: cocktails, filteredItems: 0 };
  }

  const filteredCocktails = cocktails.filter(({ category }) =>
    category.includes(cocktailFilterStatus),
  );

  const filteredItems = cocktails.length - filteredCocktails.length;

  return { filteredCocktails, filteredItems };
};
