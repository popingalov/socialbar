import type { RootState } from 'redux/store';

export const selectIngredientCategory = (state: RootState) =>
  state.categories.ingredientCategoriesStatus;

export const selectCocktailCategory = (state: RootState) =>
  state.categories.cocktailCategoriesStatus;
