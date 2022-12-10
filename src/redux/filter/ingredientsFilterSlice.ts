import { createSlice } from '@reduxjs/toolkit';
import { ingredientFilterStatus } from './constants';

const ingredientFilterInitialState = {
  status: ingredientFilterStatus.MyBarShelf,
};

const cocktailFilterSlice = createSlice({
  name: 'CocktailFilter',
  initialState: ingredientFilterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setStatusFilter } = cocktailFilterSlice.actions;
export const cocktailFilterReducer = cocktailFilterSlice.reducer;
