import type { RootState } from 'redux/store';

export const selectSettings = (state: RootState) => state.settings.settings;
