import type { RootState } from 'redux/store';

export const selectMobileMenuStatus = (state: RootState) =>
  state.modalStatus.mobileMenuStatus.isOpen;

export const selectPopUpStatus = (state: RootState) =>
  state.modalStatus.popUpStatus.isOpen;
