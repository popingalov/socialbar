import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { startTest } from './apis/operation';
<<<<<<< HEAD
=======
import { filterReducer } from './filter/filterSlice';
>>>>>>> 8fbf51a2f71c7025bb17102da4b02ab23312fdf1

const store = configureStore({
  reducer: {
    [startTest.reducerPath]: startTest.reducer,
<<<<<<< HEAD
=======
    filters: filterReducer,
>>>>>>> 8fbf51a2f71c7025bb17102da4b02ab23312fdf1
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(startTest.middleware),
});

// enable listener behavior for the store
setupListeners(store.dispatch);

<<<<<<< HEAD
=======
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

>>>>>>> 8fbf51a2f71c7025bb17102da4b02ab23312fdf1
export default store;
