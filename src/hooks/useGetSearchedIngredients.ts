import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';

export const useGetSearchedIngredients = (searchValue: string) => {
  const { data: ingredients, isFetching } = useFetchIngredientsQuery();

  if (!searchValue) {
    return {
      ingredients: [],
      isFetching: false,
    };
  }

  const filteredIngredients = ingredients?.filter(({ title }) =>
    title.includes(searchValue),
  );

  return {
    ingredients: filteredIngredients,
    isFetching,
  };
};
