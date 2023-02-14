import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalStatus } from 'types/modalStatus';

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
  settingsMenu: {
    isOpen: false,
  },
  contextMenu: {
    isOpen: false,
  },
  popUpSearch: {
    isOpen: false,
  },
  popUpGlass: {
    isOpen: false,
  },
};

const modalSlice = createSlice({
  name: 'modalStatus',
  initialState: modalStatusInitialState,
  reducers: {
    setMobileIsOpen(state, { payload }: PayloadAction<boolean>) {
      state.mobileMenuStatus.isOpen = payload;
    },
    setPopUpIsOpen(state, { payload }: PayloadAction<boolean>) {
      state.popUpSelect.isOpen = payload;
    },
    setExtraMenuIsOpen(state, { payload }: PayloadAction<boolean>) {
      state.popUpExtraMenu.isOpen = payload;
    },
    setSettingsMenuIsOpen(state, { payload }: PayloadAction<boolean>) {
      state.settingsMenu.isOpen = payload;
    },
    setContextMenuIsOpen(state, { payload }: PayloadAction<boolean>) {
      state.contextMenu.isOpen = payload;
    },
    setPopUpSearchIsOpen(state, { payload }: PayloadAction<boolean>) {
      state.popUpSearch.isOpen = payload;
    },
    setPopUpGlassIsOpen(state, { payload }: PayloadAction<boolean>) {
      state.popUpGlass.isOpen = payload;
    },
  },
});

export const {
  setMobileIsOpen,
  setPopUpIsOpen,
  setExtraMenuIsOpen,
  setSettingsMenuIsOpen,
  setContextMenuIsOpen,
  setPopUpSearchIsOpen,
  setPopUpGlassIsOpen,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
