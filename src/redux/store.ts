import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { ingApi } from './apis/ingredients';
import { cocApi } from './apis/cocteils';
import { userApi } from './apis/user';

import { filterReducer } from './filter/filterSlice';
import { ingredientReducer } from './ingredient/ingredientSlice';
import { modalReducer } from './modal/modalSlice';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [ingApi.reducerPath]: ingApi.reducer,
    [cocApi.reducerPath]: cocApi.reducer,
    filters: filterReducer,
    selectedIngredient: ingredientReducer,
    modalStatus: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      ingApi.middleware,
      cocApi.middleware,
      userApi.middleware,
    ),
});

// enable listener behavior for the store
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
