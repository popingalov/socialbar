import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  cocktailFilterStatus,
  ingredientFilterStatus,
} from './filterConstants';

const filterInitialState = {
  cocktailsStatus: cocktailFilterStatus.myCocktails,
  ingredientsStatus: ingredientFilterStatus.myBarShelf,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setCocktailStatusFilter(state, { payload }: PayloadAction<string>) {
      return {
        ...state,
        cocktailsStatus: payload,
      };
    },
    setIngredientStatusFilter(state, { payload }: PayloadAction<string>) {
      return {
        ...state,
        ingredientsStatus: payload,
      };
    },
  },
});

export const { setCocktailStatusFilter, setIngredientStatusFilter } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
