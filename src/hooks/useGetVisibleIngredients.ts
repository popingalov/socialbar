import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import { IIngredient } from 'types/ingredient';

export const useGetVisibleIngredients = (filterStatus: string) => {
  const { data: allIngredients, isFetching } = useFetchIngredientsQuery();
  // const { data: myBar, isFetching } = useFetchMyBar();
  // const { data: shoppingList, isFetching } = useFetchShoppingList();

  switch (filterStatus) {
    case ingredientFilterStatus.myBarShelf:
      const myIngredients: IIngredient[] = [];
      return { visibleIngredients: myIngredients, isFetching };
    case ingredientFilterStatus.shoppingList:
      const shoppingList: IIngredient[] = [];
      return { visibleIngredients: shoppingList, isFetching };
    default:
      return { visibleIngredients: allIngredients, isFetching };
  }
};
