import type { RootState } from 'redux/store';

export const selectMobileMenuStatus = (state: RootState) =>
  state.modalStatus.mobileMenuStatus.isOpen;

export const selectPopUpStatus = (state: RootState) =>
  state.modalStatus.popUpSelect.isOpen;

export const selectExtraMenuStatus = (state: RootState) =>
  state.modalStatus.popUpExtraMenu.isOpen;
