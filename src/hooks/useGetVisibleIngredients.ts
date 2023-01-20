import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';
import { useGetMyBarQuery } from 'redux/api/myBarApi';
import { useGetShoppingListQuery } from 'redux/api/shoppingApi';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';

export const useGetVisibleIngredients = (filterStatus: string) => {
  const { data: allIngredients, isFetching: allIngredientsFetching } =
    useFetchIngredientsQuery();
  const { data: myBar, isFetching: myBarFetching } = useGetMyBarQuery();
  const { data: shoppingList, isFetching: shoppingListFetching } =
    useGetShoppingListQuery();

  switch (filterStatus) {
    case ingredientFilterStatus.myBarShelf:
      // setSkip(prev => !prev);
      if (myBar) {
        return { visibleIngredients: myBar, isFetching: myBarFetching };
      }
      return {
        visibleIngredients: [],
        isFetching: myBarFetching,
      };

    case ingredientFilterStatus.shoppingList:
      if (shoppingList) {
        return {
          visibleIngredients: shoppingList,
          isFetching: shoppingListFetching,
        };
      }
      return {
        visibleIngredients: [],
        isFetching: shoppingListFetching,
      };

    default:
      if (allIngredients) {
        return {
          visibleIngredients: allIngredients,
          isFetching: allIngredientsFetching,
        };
      }
      return {
        visibleIngredients: [],
        isFetching: allIngredientsFetching,
      };
  }
};

//   const [skip, setSkip] = React.useState(true);
//   const { data, error, isLoading, isUninitialized } = useGetPokemonByNameQuery(
//     name,
//     {skip,},
//   );
