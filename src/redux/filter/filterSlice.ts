import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  cocktailFilterStatus,
  ingredientFilterStatus,
} from './filterConstants';

interface IFilterStatus {
  cocktailsStatus: string;
  ingredientsStatus: string;
}
const filterInitialState: IFilterStatus = {
  cocktailsStatus: cocktailFilterStatus.allCocktails,
  ingredientsStatus: ingredientFilterStatus.manageBarShelf,
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
