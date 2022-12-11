import type { RootState } from 'redux/store';

export const selectIngredientFilter = (state: RootState) =>
  state.filters.ingredientsStatus;
export const selectCocktailFilter = (state: RootState) =>
  state.filters.cocktailsStatus;
