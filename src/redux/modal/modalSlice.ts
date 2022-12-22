import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModalStatus {
  mobileMenuStatus: {
    isOpen: boolean;
  };
  popUpStatus: {
    isOpen: boolean;
  };
}
const modalStatusInitialState: IModalStatus = {
  mobileMenuStatus: {
    isOpen: false,
  },
  popUpStatus: {
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
    setPopUpIsOpen(state, { payload }: PayloadAction<boolean>) {
      return {
        ...state,
        popUpStatus: {
          isOpen: payload,
        },
      };
    },
  },
});

export const { setMobileIsOpen, setPopUpIsOpen } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
