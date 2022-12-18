import type { RootState } from 'redux/store';

export const selectIngredient = (state: RootState) =>
  state.selectedIngredient.data;
