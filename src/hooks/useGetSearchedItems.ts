import { useSelector } from 'react-redux';
import { useFetchCocktailsQuery } from 'redux/api/cocktailApi';
import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';
import { selectSearchFilter } from 'redux/searchFilter/searchFilterSelector';

export const useGetSearchedItems = () => {
  const searchValue = useSelector(selectSearchFilter);
  const { data: cocktails, isFetching: cocktailsFetching } =
    useFetchCocktailsQuery();
  const { data: ingredients, isFetching: allIngredientsFetching } =
    useFetchIngredientsQuery();

  if (!searchValue) {
    return {
      cocktails: [],
      ingredients: [],
      isFetching: false,
    };
  }

  const filteredIngredients = ingredients?.filter(({ title }) =>
    title.includes(searchValue),
  );
  const filteredCocktails = cocktails?.all.filter(({ title }) =>
    title.includes(searchValue),
  );

  return {
    cocktails: filteredCocktails,
    ingredients: filteredIngredients,
    isFetching: cocktailsFetching || allIngredientsFetching,
  };
};
