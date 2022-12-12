import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { startTest } from './apis/operation';
import { filterReducer } from './filter/filterSlice';

const store = configureStore({
  reducer: {
    [startTest.reducerPath]: startTest.reducer,
    filters: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(startTest.middleware),
});

// enable listener behavior for the store
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
