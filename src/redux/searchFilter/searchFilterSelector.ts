import type { RootState } from 'redux/store';

export const selectSearchFilter = (state: RootState) => state.search;
