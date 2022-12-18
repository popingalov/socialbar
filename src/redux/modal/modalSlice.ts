import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModalStatus {
  mobileMenuStatus: {
    isOpen: boolean;
  };
}
const modalStatusInitialState: IModalStatus = {
  mobileMenuStatus: {
    isOpen: false,
  },
};

const modalSlice = createSlice({
  name: 'modalStatus',
  initialState: modalStatusInitialState,
  reducers: {
    setMobileIsOpen(state, { payload }: PayloadAction<boolean>) {
      return {
        ...state,
        mobileMenuStatus: {
          isOpen: payload,
        },
      };
    },
  },
});

export const { setMobileIsOpen } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
