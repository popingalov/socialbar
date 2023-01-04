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
  settingsMenu: {
    isOpen: boolean;
  };
  contextMenu: {
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
  settingsMenu: {
    isOpen: false,
  },
  contextMenu: {
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
  },
});

export const {
  setMobileIsOpen,
  setPopUpIsOpen,
  setExtraMenuIsOpen,
  setSettingsMenuIsOpen,
  setContextMenuIsOpen,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
