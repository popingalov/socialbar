import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialFilterStatus } from './categoriesConstants';

interface ICategoriesFilterStatus {
  cocktailCategoriesStatus: string;
  ingredientCategoriesStatus: string;
}
const categoriesInitialState: ICategoriesFilterStatus = {
  cocktailCategoriesStatus: initialFilterStatus,
  ingredientCategoriesStatus: initialFilterStatus,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesInitialState,
  reducers: {
    setCocktailCategory(state, { payload }: PayloadAction<string>) {
      state.cocktailCategoriesStatus = payload;
    },
    setIngredientCategory(state, { payload }: PayloadAction<string>) {
      state.ingredientCategoriesStatus = payload;
    },
  },
});

export const { setCocktailCategory, setIngredientCategory } =
  categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
