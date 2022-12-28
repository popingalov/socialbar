import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { ingredientApi } from './api/ingredientApi';
import { cocktailApi } from './api/cocktailApi';
import { userApi } from './api/userApi';
import authReducer from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';
import { modalReducer } from './modal/modalSlice';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [ingredientApi.reducerPath]: ingredientApi.reducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
    auth: authReducer,
    filters: filterReducer,
    modalStatus: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      ingredientApi.middleware,
      cocktailApi.middleware,
    ),
});

// enable listener behavior for the store
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
