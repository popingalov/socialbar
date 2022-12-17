import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISelectedIngredient {
  data: IIngredient | null;
}
const ingredientInitialState: ISelectedIngredient = {
  data: null,
};

const ingredientSlice = createSlice({
  name: 'SelectedIngredient',
  initialState: ingredientInitialState,
  reducers: {
    setSelectedIngredient(state, { payload }: PayloadAction<IIngredient>) {
      return {
        ...state,
        data: payload,
      };
    },
  },
});

export const { setSelectedIngredient } = ingredientSlice.actions;
export const ingredientReducer = ingredientSlice.reducer;
