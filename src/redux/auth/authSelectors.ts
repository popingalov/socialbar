import { RootState } from '../store';

export const userState = (state: RootState) => state.auth.user;
export const tokenState = (state: RootState) => state.auth.token;
export const isAuthState = (state: RootState) => state.auth.isAuth;
