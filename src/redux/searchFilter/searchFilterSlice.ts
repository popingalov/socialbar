import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialSearchStatus } from './searchConstants';

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchStatus,
  reducers: {
    changeFilter(_, { payload }: PayloadAction<string>) {
      return payload;
    },
  },
});

export const { changeFilter } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
