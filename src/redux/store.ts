import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { configureStore } from '@reduxjs/toolkit';
import {
  ingredientApi,
  cocktailApi,
  favoriteApi,
  manualApi,
  myBarApi,
  shoppingApi,
  userApi,
} from './api';

import authReducer from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';
import { modalReducer } from './modal/modalSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedSettingsReducer } from './settings/settingsSlice';
import { categoriesReducer } from './categoriesFilter/categoriesFilterSlice';
import { searchReducer } from './searchFilter/searchSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [ingredientApi.reducerPath]: ingredientApi.reducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
    [manualApi.reducerPath]: manualApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [myBarApi.reducerPath]: myBarApi.reducer,
    [shoppingApi.reducerPath]: shoppingApi.reducer,
    auth: authReducer,
    filters: filterReducer,
    modalStatus: modalReducer,
    settings: persistedSettingsReducer,
    categories: categoriesReducer,
    search: searchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      userApi.middleware,
      ingredientApi.middleware,
      cocktailApi.middleware,
      manualApi.middleware,
      favoriteApi.middleware,
      shoppingApi.middleware,
      myBarApi.middleware,
    ),
});

// enable listener behavior for the store
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

//! without persist
// import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
// import { configureStore } from '@reduxjs/toolkit';
// import { ingredientApi } from './api/ingredientApi';
// import { cocktailApi } from './api/cocktailApi';
// import { userApi } from './api/userApi';
// import authReducer from './auth/authSlice';
// import { filterReducer } from './filter/filterSlice';
// import { modalReducer } from './modal/modalSlice';

// export const store = configureStore({
//   reducer: {
//     [userApi.reducerPath]: userApi.reducer,
//     [ingredientApi.reducerPath]: ingredientApi.reducer,
//     [cocktailApi.reducerPath]: cocktailApi.reducer,
//     auth: authReducer,
//     filters: filterReducer,
//     modalStatus: modalReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(
//       userApi.middleware,
//       ingredientApi.middleware,
//       cocktailApi.middleware,
//     ),
// });

// // enable listener behavior for the store
// setupListeners(store.dispatch);

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
