import type { RootState } from 'redux/store';

export const selectMobileMenuStatus = (state: RootState) =>
  state.modalStatus.mobileMenuStatus.isOpen;
