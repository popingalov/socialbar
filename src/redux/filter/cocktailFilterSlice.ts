import { createSlice } from '@reduxjs/toolkit';
import { cocktailFilterStatus } from './constants';

const cocktailFilterInitialState = {
  status: cocktailFilterStatus.myCocktails,
};

const cocktailFilterSlice = createSlice({
  name: 'CocktailFilter',
  initialState: cocktailFilterInitialState,
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
