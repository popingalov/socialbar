import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitState {
  ingredients: IIngredient[];
}

const initialState: IInitState = {
  ingredients: [],
};

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,

  reducers: {
    getAllIngredients: (state, { payload }: PayloadAction<IIngredient[]>) => {
      state.ingredients = [...payload];
    },
  },
});

export const { getAllIngredients } = ingredientSlice.actions;

export const ingredientReducer = ingredientSlice.reducer;
