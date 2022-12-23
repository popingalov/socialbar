import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModalStatus {
  mobileMenuStatus: {
    isOpen: boolean;
  };
  popUpSelect: {
    isOpen: boolean;
  };
  popUpExtraMenu: {
    isOpen: boolean;
  };
}
const modalStatusInitialState: IModalStatus = {
  mobileMenuStatus: {
    isOpen: false,
  },
  popUpSelect: {
    isOpen: false,
  },
  popUpExtraMenu: {
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
        popUpSelect: {
          isOpen: payload,
        },
      };
    },
    setExtraMenuIsOpen(state, { payload }: PayloadAction<boolean>) {
      return {
        ...state,
        popUpExtraMenu: {
          isOpen: payload,
        },
      };
    },
  },
});

export const { setMobileIsOpen, setPopUpIsOpen, setExtraMenuIsOpen } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
