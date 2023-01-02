// import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import { IIngredient } from 'types/ingredient';

export function getVisibleIngredients(
  ingredients: IIngredient[],
  filterStatus: string,
) {
  switch (filterStatus) {
    // case ingredientFilterStatus.myBarShelf:
    //   return ingredients.filter(({ available }) => available);
    // case ingredientFilterStatus.shoppingList:
    //   return ingredients.filter(({ shop }) => shop);
    default:
      return ingredients;
  }
}
